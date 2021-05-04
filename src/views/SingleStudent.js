import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      {student.name}
    </div>
  );
}
