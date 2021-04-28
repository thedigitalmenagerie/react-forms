import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getStudents } from '../helpers/data/studentData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
    <Router>
      <NavBar/>
      <Routes students={students} setStudents={setStudents}/>
    </Router>
    </>
  );
}

export default App;
