import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { API_ROUTES } from '../../constants';

const Register = () => {
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    fetch(API_ROUTES.register, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.successful) {
          navigate('/login');
        } else {
          setFormErrors(data.errors || [data.result]);
        }
      });
  };

  return (
    <div className='container mt-3'>
      <h1 className='text-center mt-3'>Registration</h1>
      {formErrors.length > 0 ? (
        <div className='alert alert-danger' role='alert'>
          {formErrors.join('. ')}
        </div>
      ) : (
        <></>
      )}
      <div className='d-flex justify-content-center mt-3'>
        <form id='register' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <Input
            type='name'
            id='name'
            name='name'
            className='form-control'
            placeholder='Enter name'
            required
          />
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
            buttonText='Registration'
            onButtonClick={() => {}}
            buttonClassName='form-control mt-3 btn btn-outline-primary'
          />
        </form>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <span>
          {'If you have an account you can '}
          <Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
