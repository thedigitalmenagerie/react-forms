import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddStudent, UpdateStudent } from './helpers/data/studentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [students, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || 0,
    firebaseKey: firebaseKey || null
  });

  const HandleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (students.firebaseKey) {
      UpdateStudent(students).then((studentsArray) => setStudents(studentsArray));
    } else {
      AddStudent(students).then((studentsArray) => setStudents(studentsArray));
    }
  };

  return (
    <>
    <div className='student-form'>
      <form id='addStudentForm'
      autoComplete='off'
      onSubmit={HandleSubmit}
      >
        <h2>{formTitle}</h2>
        <label>Name: </label>
        <input name='name' type='text' placeholder='Name' value={students.name.value} onChange={HandleInputChange}></input>
        <label>Teacher:</label>
        <input name='teacher' type='text' placeholder='Teacher' value={students.teacher.value} onChange={HandleInputChange}></input>
        <label>Grade: </label>
        <input name='grade' type='number' placeholder='Grade' value={students.grade.value} onChange={HandleInputChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
