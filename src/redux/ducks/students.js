/*
Optei por utilizar o duck pattern para criar os reducers e actions.
Com isso, tanto os tipos das actions e os action creators quanto os reducers são criados
em um arquivo único, facilitando a leitura e manutenção do código.
*/

const typesPrefix = '@students';

export const types = {
  SET_STUDENTS: `${typesPrefix}/SET_STUDENTS`,
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  GET_STUDENTS_ASYNC: `${typesPrefix}/GET_STUDENTS_ASYNC`,
  UPDATE_STUDENT_ASYNC: `${typesPrefix}/UPDATE_STUDENT_ASYNC`,
  CREATE_STUDENT_ASYNC: `${typesPrefix}/CREATE_STUDENT_ASYNC`,
};

const INITIAL_STATE = {
  students: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_STUDENTS:
      return { ...state, students: action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const setStudents = students => ({
  type: types.SET_STUDENTS,
  payload: students,
});

export const setIsLoading = isLoading => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const getStudentsAsync = () => ({
  type: types.GET_STUDENTS_ASYNC,
});

export const updateStudentAsync = (student, callback) => ({
  type: types.UPDATE_STUDENT_ASYNC,
  payload: { student, callback },
});

export const createStudentAsync = (student, callback) => ({
  type: types.CREATE_STUDENT_ASYNC,
  payload: { student, callback },
});

export const allActions = {
  setStudents,
  setIsLoading,
  getStudentsAsync,
  updateStudentAsync,
  createStudentAsync,
};
