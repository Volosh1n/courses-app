import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import { API_ROUTES } from '../../constants';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import filterCoursesByTitle from '../../helpers/filterCoursesByTitle';

function Courses() {
  const [coursesList, setCoursesList] = useState([]);
  const [filteredCoursesList, setFilteredCoursesList] = useState([]);

  const getCourses = async () => {
    const response = await fetch(API_ROUTES.coursesAll);
    const courses = await response.json();
    setCoursesList(courses.result);
    setFilteredCoursesList(courses.result);
  };

  const searchCourseByTitle = (title) => {
    if (title.length > 0) {
      setFilteredCoursesList(filterCoursesByTitle(coursesList, title));
    } else {
      setFilteredCoursesList(coursesList);
    }
  };

  useLayoutEffect(() => {
    getCourses();
  }, []);

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
