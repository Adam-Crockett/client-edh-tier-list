import {
  END_LOADING,
  FETCH_ALL,
  FETCH_SET,
  FETCH_SET_CMDS,
  START_LOADING
} from '../constants/actionTypes';

export default (state = { isLoading: true, sets: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        sets: action.payload.data
      };
    default:
      return state;
  }
};
