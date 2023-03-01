import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import { mockedAuthorsList } from '../../../../constants';

const CourseCard = (props) => {
  const formatAuthors = (author_ids) => {
    const authorObjects = mockedAuthorsList.filter((author) =>
      author_ids.includes(author.id)
    );
    const authorsNames = authorObjects.map((author) => author.name).join(', ');
    return authorsNames;
  };

  return (
    <div className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-sm-8'>
          <h2>{props.course.title}</h2>
          <p>{props.course.description}</p>
        </div>
        <div className='col-sm-4'>
          <b>Authors: </b>
          {formatAuthors(props.course.authors)}
          <br />
          <b>Duration: </b>
          {getCourseDuration(props.course.duration)}
          <br />
          <b>Created: </b>
          {formatCreationDate(props.course.creationDate)}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
