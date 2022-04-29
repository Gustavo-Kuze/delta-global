import { put, call } from 'redux-saga/effects';
import { getStudents, updateStudent } from '../../services/studentsService';
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
      payload: result,
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

export { fetchStudentsEffect, updateStudentEffect };
