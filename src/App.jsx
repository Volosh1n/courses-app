import { useLayoutEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourseForm from './components/CreateCourse/CreateCourseForm';
import Course from './components/Courses/components/Course/Course';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import { getCourses } from './store/courses/reducer';
import { getAuthors } from './store/authors/reducer';

import './App.css';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getCourses());
    dispatch(getAuthors());
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='container mt-3'>
      <Header />
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='create-course' element={<CreateCourseForm />} />
        <Route path='courses/:id' element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
