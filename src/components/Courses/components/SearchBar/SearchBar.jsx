import { useState } from 'react';

function SearchBar(props) {
  const [nameValue, setNameValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setNameValue(value);
    if (value.length === 0) {
      props.searchCourseByTitle(value)();
    }
  };

  const handleSubmit = (event) => {
    props.searchCourseByTitle(nameValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='m-3'>
      <div className='row'>
        <div className='col'>
          <input
            type='text'
            placeholder='Enter course name...'
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='col'>
          <input type='submit' value='Search' className='btn btn-primary' />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
