import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { API_ROUTES } from '../../constants';
import getCourseDuration from '../../helpers/getCourseDuration';

const CreateCourseForm = () => {
  const navigate = useNavigate();

  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState([]);
  const [duration, setDuration] = useState('');

  const getAuthors = async () => {
    const response = await fetch(API_ROUTES.authorsAll);
    const authors = await response.json();
    setCurrentAuthors(authors.result);
  };

  useLayoutEffect(() => {
    getAuthors();
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
    const newCourseData = {
      title: formData.get('title'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      authors: selectedAuthors,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    };
    fetch(API_ROUTES.newCourse, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(newCourseData),
    })
      .then((response) => response.json())
      .then(() => navigate('/'));
  };

  const handleCreateAuthorSubmit = (event) => {
    event.preventDefault();
    const newAuthorData = {
      name: document.querySelector('#author-name').value,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    };
    fetch(API_ROUTES.newAuthor, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(newAuthorData),
    }).then((response) => response.json());
    getAuthors();
  };

  return (
    <div className='container mt-3'>
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
            minLength={2}
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
                className='form-control'
                placeholder='Enter author name...'
              />
            </div>
            <div className='text-center'>
              <Button
                buttonText='Create author'
                onButtonClick={handleCreateAuthorSubmit}
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
