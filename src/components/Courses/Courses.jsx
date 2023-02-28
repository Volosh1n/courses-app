import { useState } from 'react';
import { mockedCoursesList } from '../../constants';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

function Courses() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);

  const searchCourseByTitle = (title) => {
    if (title.length > 0) {
      setCoursesList(
        mockedCoursesList.filter((course) => {
          return course.title.toLowerCase().includes(title.toLowerCase());
        })
      );
    } else {
      setCoursesList(mockedCoursesList);
    }
  };

  return (
    <div>
      <SearchBar searchCourseByTitle={searchCourseByTitle} />
      <div className='list-group m-3'>
        {coursesList.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
