const typesPrefix = '@appSettings';

export const types = {
  SET_APP_SETTINGS: `${typesPrefix}/SET_APP_SETTINGS`,
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  GET_APP_SETTINGS_ASYNC: `${typesPrefix}/GET_APP_SETTINGS_ASYNC`,
};

const INITIAL_STATE = {
  appSettings: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_APP_SETTINGS:
      return { ...state, appSettings: action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const setAppSettings = appSettings => ({
  type: types.SET_APP_SETTINGS,
  payload: appSettings,
});

export const setIsLoading = isLoading => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const getAppSettingsAsync = () => ({
  type: types.GET_APP_SETTINGS_ASYNC,
});

export const allActions = {
  setAppSettings,
  setIsLoading,
  getAppSettingsAsync,
};
