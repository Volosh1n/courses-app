import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import getCurrentDate from '../../helpers/getCurrentDate';
import getCourseDuration from '../../helpers/getCourseDuration';

const CreateCourseForm = ({ authors, handleAddCoursesSubmit }) => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState([]);
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (currentAuthors.length === 0) {
      setCurrentAuthors(authors);
    }
  }, []);

  const handleAuthorClick = (authorId) => {
    if (selectedAuthors.includes(authorId)) {
      setSelectedAuthors(selectedAuthors.filter((id) => id !== authorId));
    } else {
      setSelectedAuthors([...selectedAuthors, authorId]);
    }
  };

  const handleDurationChange = (event) => {
    setDuration(getCourseDuration(event.target.value, false));
  };

  const handleCreateCourseSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCourse = {
      id: uuidv4(),
      title: formData.get('title'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      creationDate: getCurrentDate(),
      authors: selectedAuthors,
    };
    handleAddCoursesSubmit(newCourse, currentAuthors);
  };

  const handleCreateAuthorSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAuthor = {
      id: uuidv4(),
      name: formData.get('author-name'),
    };
    setCurrentAuthors([newAuthor, ...currentAuthors]);
  };

  return (
    <div className='container m-3'>
      <form id='create-author' onSubmit={handleCreateAuthorSubmit}></form>
      <form id='create-course' onSubmit={handleCreateCourseSubmit}>
        <div className='form-group m-3'>
          <label htmlFor='title'>Title</label>
          <Input
            type='text'
            id='title'
            name='title'
            className='form-control'
            placeholder='Enter title...'
            required
          />
        </div>
        <div className='form-group m-3'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            name='description'
            className='form-control'
            placeholder='Enter description...'
            maxLength={140}
            required
          />
        </div>

        <div className='row mt-5'>
          <div className='col col-md-6'>
            <div className='text-center'>
              <h3>Add author</h3>
            </div>
            <div className='form-group m-3'>
              <label htmlFor='title'>Author name</label>
              <Input
                id='author-name'
                name='author-name'
                form='create-author'
                className='form-control'
                placeholder='Enter author name...'
                required={true}
              />
            </div>
            <div className='text-center'>
              <Input
                type='submit'
                value='Create author'
                form='create-author'
                className='btn btn-outline-primary'
              />
            </div>
          </div>

          <div className='col col-md-6'>
            <div className='form-group'>
              <div className='text-center'>
                <h3>Authors</h3>
              </div>
              {currentAuthors.map((author) => (
                <div className='row m-3' key={author.id}>
                  <span className='col'>{author.name}</span>
                  <Button
                    onButtonClick={() => handleAuthorClick(author.id)}
                    buttonKey={author.id}
                    buttonText='Add author'
                    buttonClassName={`btn ${
                      selectedAuthors.includes(author.id)
                        ? 'btn-success col'
                        : 'btn-outline-secondary col'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col col-md-6'>
            <div className='form-group m-3'>
              <div className='text-center'>
                <h3>Duration</h3>
              </div>
              <label htmlFor='duration'>Duration</label>
              <Input
                type='number'
                id='duration'
                name='duration'
                min='0'
                className='form-control'
                placeholder='Enter duration in minutes...'
                onChange={handleDurationChange}
                required
              />
            </div>
            <div className='m-3'>
              <h3>Duration: {duration ? duration : null} </h3>
            </div>
          </div>
          <div className='col col-md-6'>
            <div className='m-3'>
              <div className='text-center'>
                <h3>Course authors</h3>
              </div>
            </div>
            {selectedAuthors.length > 0 ? (
              <h6 className='mt-4'>
                {currentAuthors
                  .filter((author) => selectedAuthors.includes(author.id))
                  .map((author) => author.name)
                  .join(', ')}
              </h6>
            ) : (
              <div className='text-center'>
                <h6>Author list is empty</h6>
              </div>
            )}
          </div>
        </div>
        <Input
          type='submit'
          value='Create course'
          form='create-course'
          className='btn btn-outline-primary'
        />
      </form>
    </div>
  );
};

export default CreateCourseForm;
