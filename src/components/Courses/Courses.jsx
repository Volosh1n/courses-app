import { useState, useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';

function Courses(props) {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    setAuthorsList(props.authorsList);
  }, []);

  return (
    <>
      <div className='list-group m-3'>
        {props.coursesList.map((course) => (
          <CourseCard course={course} authors={authorsList} />
        ))}
      </div>
    </>
  );
}

export default Courses;
