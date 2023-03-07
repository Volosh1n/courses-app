import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';

const CourseCard = ({ course, authors }) => {
  const formatAuthors = (author_ids, authorList) => {
    const authorObjects = authorList.filter((author) =>
      author_ids.includes(author.id)
    );
    const authorsNames = authorObjects.map((author) => author.name).join(', ');
    return authorsNames;
  };

  return (
    <div className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-sm-8'>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
        <div className='col-sm-4'>
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

export default CourseCard;
