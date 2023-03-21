import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { API_ROUTES } from '../../constants';

const Login = () => {
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    fetch(API_ROUTES.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.successful) {
          localStorage.setItem('username', data.user.name);
          localStorage.setItem('token', data.result);
          navigate('/');
        } else {
          setFormErrors(data.errors || [data.result]);
        }
      });
  };

  return (
    <div className='container mt-3'>
      <h1 className='text-center mt-3'>Login</h1>
      {formErrors && formErrors.length > 0 ? (
        <div className='alert alert-danger' role='alert'>
          {formErrors.join('. ')}
        </div>
      ) : (
        <></>
      )}
      <div className='d-flex justify-content-center mt-3'>
        <form id='login' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            id='email'
            name='email'
            className='form-control'
            placeholder='Enter email'
            required
          />
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            id='password'
            name='password'
            className='form-control'
            placeholder='Enter password'
            required
          />
          <Button
            type='submit'
            buttonText='Login'
            onButtonClick={() => {}}
            buttonClassName='form-control mt-3 btn btn-outline-primary'
          />
        </form>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <span>
          {'If you not have an account you can '}
          <Link to='/register'>Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
