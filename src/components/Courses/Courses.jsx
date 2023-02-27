import { useState } from 'react';
import { mockedCoursesList } from '../../constants';
import CourseCard from './components/CourseCard/CourseCard';

function Courses() {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    setCoursesList(
      mockedCoursesList.map((course) => <CourseCard course={course} />)
    );
  }, []);

  return (
    <div>
      <div className='list-group m-3'>{coursesList}</div>
    </div>
  );
}

export default Courses;
