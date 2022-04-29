import { takeLatest, all } from 'redux-saga/effects';
import { types as studentsTypes } from '../ducks/students';
import {
  createStudentEffect,
  fetchStudentsEffect,
  updateStudentEffect,
} from './studentsSaga';

export default function* root() {
  yield all([
    yield takeLatest(studentsTypes.GET_STUDENTS_ASYNC, fetchStudentsEffect),
    yield takeLatest(studentsTypes.UPDATE_STUDENT_ASYNC, updateStudentEffect),
    yield takeLatest(studentsTypes.CREATE_STUDENT_ASYNC, createStudentEffect),
  ]);
}
