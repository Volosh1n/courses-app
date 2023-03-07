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
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [filteredCoursesList, setFilteredCoursesList] = useState([]);
  const [isAddingNewCourse, setIsAddingNewCourse] = useState(false);

  const searchCourseByTitle = (title) => {
    if (title.length > 0) {
      setFilteredCoursesList(filterCoursesByTitle(coursesList, title));
    } else {
      setFilteredCoursesList(coursesList);
    }
  };

  const handleAddCoursesSubmit = (newCourse, currentAuthors) => {
    setCoursesList([newCourse, ...coursesList]);
    console.log(currentAuthors);
    setAuthorsList(currentAuthors);
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
            authors={authorsList}
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
            authors={authorsList}
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
