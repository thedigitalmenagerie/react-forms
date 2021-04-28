import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/addStudent';
import Home from '../views/home';
import Students from '../views/students';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route
        path='/students'
        component={() => <Students students={students}
        setStudents={setStudents} />}
        />
        <Route path='/add-students' component={() => <AddStudent setStudents={setStudents} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
