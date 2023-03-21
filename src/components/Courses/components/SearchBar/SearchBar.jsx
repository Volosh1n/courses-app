import { useState } from 'react';
import Input from '../../../../common/Input/Input';

function SearchBar({ searchCourseByTitle }) {
  const [nameValue, setNameValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setNameValue(value);
    if (value.length === 0) {
      searchCourseByTitle(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCourseByTitle(nameValue);
  };

  return (
    <>
      <div className='col'>
        <form id='search-course' onSubmit={handleSubmit} className='m-3'>
          <Input
            type='text'
            placeholder='Enter course name...'
            onChange={handleChange}
            className='form-control'
          />
        </form>
      </div>
      <div className='col d-flex align-items-center'>
        <Input
          type='submit'
          form='search-course'
          value='Search'
          className='btn btn-outline-primary'
        />
      </div>
    </>
  );
}

export default SearchBar;
