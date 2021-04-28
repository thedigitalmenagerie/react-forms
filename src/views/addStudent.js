import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../studentForm';

function addStudent({ setStudents }) {
  return (
    <div>
      <StudentForm
      formTitle='Add Student'
      setStudents={setStudents}
      />
    </div>
  );
}

addStudent.propTypes = {
  student: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default addStudent;
