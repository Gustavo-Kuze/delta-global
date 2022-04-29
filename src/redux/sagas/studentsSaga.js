import { put, call } from 'redux-saga/effects';
import { orderBy } from '../../helpers/orderBy';
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from '../../services/studentsService';
import { types as studentsTypes } from '../ducks/students';

function* fetchStudentsEffect() {
  yield put({
    type: studentsTypes.SET_LOADING,
    payload: true,
  });

  const result = yield call(() => getStudents());

  if (!result.error) {
    yield put({
      type: studentsTypes.SET_STUDENTS,
      // ordena os estudantes em ordem alfabética
      payload: result.sort(orderBy(['fullName'], ['asc'])),
    });
  }

  yield put({
    type: studentsTypes.SET_LOADING,
    payload: false,
  });
}

function* updateStudentEffect(action) {
  const result = yield call(() =>
    updateStudent(action.payload.student.id, action.payload.student),
  );

  if (!result.error) {
    yield put({
      type: studentsTypes.GET_STUDENTS_ASYNC,
    });
    action.payload.callback();
  }
}

function* createStudentEffect(action) {
  const result = yield call(() => createStudent(action.payload.student));

  if (!result.error) {
    yield put({
      type: studentsTypes.GET_STUDENTS_ASYNC,
    });
    action.payload.callback();
  }
}

function* deleteStudentEffect(action) {
  const result = yield call(() =>
    deleteStudent(action.payload.id, action.payload.callback),
  );

  if (!result.error) {
    action.payload.callback();
  }
}

export {
  fetchStudentsEffect,
  updateStudentEffect,
  createStudentEffect,
  deleteStudentEffect,
};
