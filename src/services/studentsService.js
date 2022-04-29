import database from '@react-native-firebase/database';

const getStudents = () => {
  return new Promise(resolve => {
    database()
      .ref('/users')
      .once('value', snapshot => {
        const users = snapshot.val();
        resolve(
          Object.keys(users).map(key => ({
            id: key,
            ...users[key],
          })),
        );
      });
  });
};

const getStudentById = id => {
  return new Promise(resolve => {
    database()
      .ref(`/users/${id}`)
      .once('value', snapshot => {
        const user = snapshot.val();
        resolve({
          id,
          ...user,
        });
      });
  });
};

const createStudent = user => {
  return new Promise(resolve => {
    database()
      .ref('/users')
      .push(user)
      .then(snapshot => {
        resolve({
          id: snapshot.key,
          ...user,
        });
      });
  });
};

const updateStudent = (id, user) => {
  return new Promise(resolve => {
    database()
      .ref(`/users/${id}`)
      .update(user)
      .then(() => {
        resolve({
          id,
          ...user,
        });
      });
  });
};

const deleteStudent = (id, callback) => {
  return new Promise(resolve => {
    database()
      .ref(`/users/${id}`)
      .remove()
      .then(() => {
        callback();
        resolve({});
      });
  });
};

export {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
