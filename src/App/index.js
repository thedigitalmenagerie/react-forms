import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import { getStudents } from '../helpers/data/studentData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar user={user}/>
      <Routes user={user} students={students} setStudents={setStudents}/>
    </Router>
    </>
  );
}

export default App;
