import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { DeleteStudent } from '../helpers/data/studentData';
import StudentForm from '../studentForm';

const StudentCard = ({
  firebaseKey,
  name,
  grade,
  teacher,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    // switch case
    switch (type) {
      case 'delete':
        DeleteStudent(firebaseKey)
          .then((studentsArray) => setStudents(studentsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };
  return (
    <Card body>
    <CardTitle tag="h5">{name}</CardTitle>
    <CardText>{grade}</CardText>
    <CardText>{teacher}</CardText>
    <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
    <Button color="info" onClick={() => handleClick('edit')}>
      {editing ? 'Close Form' : 'Edit Student'}
      </Button>
    {editing && <StudentForm
    formTitle='Edit Student'
    setStudents={setStudents}
    firebaseKey={firebaseKey}
    name={name}
    grade={grade}
    teacher={teacher}
    /> }
  </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
};

export default StudentCard;
