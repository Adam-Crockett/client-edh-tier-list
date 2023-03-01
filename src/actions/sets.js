import {
  END_LOADING,
  FETCH_ALL,
  FETCH_SET,
  FETCH_SET_CMDS,
  START_LOADING
} from '../constants/actionTypes';
import * as api from '../api';

export const getSets = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchAllSets();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
