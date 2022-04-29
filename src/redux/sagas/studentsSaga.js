import { put, call } from 'redux-saga/effects';
import { getStudents } from '../../services/studentsService';
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

export { fetchStudentsEffect };
