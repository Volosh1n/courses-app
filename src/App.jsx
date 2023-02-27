import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='container mt-3'>
      <Header />
      <Courses />
    </div>
  );
}

export default App;
