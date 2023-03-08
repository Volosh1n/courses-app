import { useState, useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';

function Courses({ authors, coursesList }) {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    setAuthorsList(authors);
  }, []);

  return (
    <div className='list-group m-3'>
      {coursesList.map((course) => (
        <CourseCard course={course} authors={authorsList} key={course.id} />
      ))}
    </div>
  );
}

export default Courses;
