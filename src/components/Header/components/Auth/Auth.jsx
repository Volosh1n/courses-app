import { useState, useEffect } from 'react';
import Button from '../../../../common/Button/Button';

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <small className='m-3'>username</small>
          <Button onButtonClick={handleLogout} buttonText='Logout' />
        </>
      ) : (
        <Button onButtonClick={handleLogin} buttonText='Login' />
      )}
    </div>
  );
}

export default Auth;
