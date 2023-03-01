import CourseCard from './components/CourseCard/CourseCard';

function Courses(props) {
  return (
    <>
      <div className='list-group m-3'>
        {props.coursesList.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </>
  );
}

export default Courses;
