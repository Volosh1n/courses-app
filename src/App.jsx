import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourseForm from './components/CreateCourse/CreateCourseForm';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';

import filterCoursesByTitle from './helpers/filterCoursesByTitle';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import './App.css';

function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [filteredCoursesList, setFilteredCoursesList] = useState([]);
  const [authorsList] = useState(mockedAuthorsList);
  const [isAddingNewCourse, setIsAddingNewCourse] = useState(false);

  const searchCourseByTitle = (title) => {
    if (title.length > 0) {
      setFilteredCoursesList(filterCoursesByTitle(coursesList, title));
    } else {
      setFilteredCoursesList(coursesList);
    }
  };

  const handleAddCoursesSubmit = (newCourse) => {
    setCoursesList([newCourse, ...coursesList]);
    setFilteredCoursesList([]);
    setIsAddingNewCourse(false);
  };

  const handleAddCourseButtonClick = () => {
    setIsAddingNewCourse(true);
  };

  return (
    <div className='container mt-3'>
      <Header />
      {isAddingNewCourse ? (
        <>
          <CreateCourseForm
            currentAuthors={authorsList}
            handleAddCoursesSubmit={handleAddCoursesSubmit}
          />
        </>
      ) : (
        <>
          <SearchBar
            searchCourseByTitle={searchCourseByTitle}
            handleAddCourseButtonClick={handleAddCourseButtonClick}
          />
          <Courses
            coursesList={
              filteredCoursesList.length === 0
                ? coursesList
                : filteredCoursesList
            }
          />
        </>
      )}
    </div>
  );
}

export default App;
