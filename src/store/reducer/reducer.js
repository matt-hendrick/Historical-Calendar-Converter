import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
  wikipediaData: null,
  NYTimesData: null,
  loading: null,
};

const getWikipediaStart = (state) => {
  return updateObject(state, { loading: true });
};

const getWikipediaSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    wikipediaData: action.wikipediaData,
  });
};

const getWikipediaFail = (state) => {
  return updateObject(state, { loading: false });
};

const getNYTimesStart = (state) => {
  return updateObject(state, { loading: true });
};

const getNYTimesSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    NYTimesData: action.NYTimesData,
  });
};

const getNYTimesFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WIKIPEDIA_START:
      return getWikipediaStart(state, action);
    case actionTypes.GET_WIKIPEDIA_SUCCESS:
      return getWikipediaSuccess(state, action);
    case actionTypes.GET_WIKIPEDIA_FAIL:
      return getWikipediaFail(state, action);
    case actionTypes.GET_NYTIMES_START:
      return getNYTimesStart(state, action);
    case actionTypes.GET_NYTIMES_SUCCESS:
      return getNYTimesSuccess(state, action);
    case actionTypes.GET_NYTIMES_FAIL:
      return getNYTimesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
