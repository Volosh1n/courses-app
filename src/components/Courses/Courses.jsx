import { useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import filterCoursesByTitle from '../../helpers/filterCoursesByTitle';

function Courses() {
  const coursesList = useSelector((state) => state.courses);
  const [filteredCoursesList, setFilteredCoursesList] = useState(coursesList);

  const searchCourseByTitle = (title) => {
    if (title.length > 0) {
      setFilteredCoursesList(filterCoursesByTitle(coursesList, title));
    } else {
      setFilteredCoursesList(coursesList);
    }
  };

  useLayoutEffect(() => {
    setFilteredCoursesList(coursesList);
  }, [coursesList]);

  return (
    <>
      <div className='row'>
        <SearchBar searchCourseByTitle={searchCourseByTitle} />
        <div className='col d-flex flex-row-reverse align-items-center'>
          <Link to='/create-course'>
            <Button buttonText='Add new course' />
          </Link>
        </div>
      </div>
      <div className='list-group m-3'>
        {filteredCoursesList.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}

export default Courses;
