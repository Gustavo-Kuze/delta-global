import { takeLatest, all } from 'redux-saga/effects';
import { types as studentsTypes } from '../ducks/students';
import { fetchStudentsEffect } from './studentsSaga';

export default function* root() {
  yield all([
    yield takeLatest(studentsTypes.GET_STUDENTS_ASYNC, fetchStudentsEffect),
  ]);
}
