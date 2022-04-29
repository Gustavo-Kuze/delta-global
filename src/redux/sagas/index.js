import { takeLatest, all } from 'redux-saga/effects';
import { types as appSettingsTypes } from '../ducks/appSettings';
import { fetchAppSettingsEffect } from './appSettingsSaga';

export default function* root() {
  yield all([
    yield takeLatest(
      appSettingsTypes.GET_APP_SETTINGS_ASYNC,
      fetchAppSettingsEffect,
    ),
  ]);
}
