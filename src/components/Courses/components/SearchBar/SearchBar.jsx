import { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function SearchBar({ searchCourseByTitle, handleAddCourseButtonClick }) {
  const [nameValue, setNameValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setNameValue(value);
    if (value.length === 0) {
      searchCourseByTitle(value);
    }
  };

  const handleSubmit = (event) => {
    searchCourseByTitle(nameValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='m-3'>
      <div className='row'>
        <div className='col'>
          <Input
            type='text'
            placeholder='Enter course name...'
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='col'>
          <Input
            type='submit'
            value='Search'
            className='btn btn-outline-primary'
          />
        </div>
        <div className='col d-flex flex-row-reverse'>
          <Button
            onButtonClick={handleAddCourseButtonClick}
            buttonText='Add new course'
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
