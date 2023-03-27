import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import { API_ROUTES } from '../../../../constants';
import formatAuthors from '../utils/formatAuthors';

const CourseCard = ({ course }) => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await fetch(API_ROUTES.authorsAll);
    const authors = await response.json();
    setAuthors(authors.result);
  };

  useLayoutEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-sm-8'>
          <Link to={`/courses/${course.id}`} className='link-secondary'>
            <h2>{course.title}</h2>
          </Link>
          <p>{course.description}</p>
        </div>
        <div className='col-sm-4 text-truncate'>
          <b>Authors: </b>
          {formatAuthors(course.authors, authors)}
          <br />
          <b>Duration: </b>
          {getCourseDuration(course.duration)}
          <br />
          <b>Created: </b>
          {formatCreationDate(course.creationDate)}
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;
