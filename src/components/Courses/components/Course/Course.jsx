import { useState, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ROUTES } from '../../../../constants';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import formatAuthors from '../utils/formatAuthors';

const Course = () => {
  const params = useParams();
  const [course, setCourse] = useState();
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await fetch(API_ROUTES.authorsAll);
    const authors = await response.json();
    setAuthors(authors.result);
  };

  const getCourse = async () => {
    const response = await fetch(API_ROUTES.course(params.id));
    const courseData = await response.json();
    setCourse(courseData.result);
  };

  useLayoutEffect(() => {
    getAuthors();
    getCourse();
  }, []);

  return (
    <div className='container mt-3'>
      <Link to='/'>{'< Back to courses'}</Link>
      {course ? (
        <>
          <h1 className='text-center'>{course.title}</h1>
          <div className='row'>
            <div className='col-8'>
              <p>{course.description}</p>
            </div>
            <div className='col-4'>
              <b>Duration: </b>
              {getCourseDuration(course.duration)}
              <br />
              <b>Created: </b>
              {formatCreationDate(course.creationDate)}
              <br />
              <b>Authors: </b>
              {formatAuthors(course.authors, authors)}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Course;
