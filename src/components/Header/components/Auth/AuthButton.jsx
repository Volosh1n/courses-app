import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';

function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('token');
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
    setUsername(localStorage.getItem('username') || '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <small className='m-3'>{username}</small>
          <Button onButtonClick={handleLogout} buttonText='Logout' />
        </>
      ) : (
        <Link to='/login'>
          <Button buttonText='Login' />
        </Link>
      )}
    </div>
  );
}

export default AuthButton;
