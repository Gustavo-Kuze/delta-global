import { put, call } from 'redux-saga/effects';
import { types as appSettingsTypes } from '../ducks/appSettings';

function* fetchAppSettingsEffect() {
  yield put({
    type: appSettingsTypes.SET_LOADING,
    payload: true,
  });

  const result = yield call(() => {});

  if (!result.error) {
    yield put({
      type: appSettingsTypes.SET_APP_SETTINGS,
      payload: result,
    });
  }

  yield put({
    type: appSettingsTypes.SET_LOADING,
    payload: false,
  });
}

export { fetchAppSettingsEffect };
