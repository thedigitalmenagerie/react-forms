import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DbURL = firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${DbURL}/students.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const AddStudent = (students) => new Promise((resolve, reject) => {
  axios.post(`${DbURL}/students.json`, students)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DbURL}/students/${response.data.name}.json`, body)
        .then(() => {
          getStudents().then((studentsArray) => resolve(studentsArray));
        });
    }).catch((error) => reject(error));
});

const DeleteStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DbURL}/students/${firebaseKey}.json`)
    .then(() => getStudents().then((studentsArray) => resolve(studentsArray)))
    .catch((error) => reject(error));
});

const UpdateStudent = (students) => new Promise((resolve, reject) => {
  axios.patch(`${DbURL}/students/${students.firebaseKey}.json`, students)
    .then(() => getStudents().then(resolve))
    .catch((error) => reject(error));
});

export {
  getStudents, AddStudent, DeleteStudent, UpdateStudent
};
