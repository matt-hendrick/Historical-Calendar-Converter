import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getWikipediaStart = () => {
  return {
    type: actionTypes.GET_WIKIPEDIA_START,
  };
};

export const getWikipediaSuccess = (json) => {
  return {
    type: actionTypes.GET_WIKIPEDIA_SUCCESS,
    wikipediaData: json,
  };
};

export const getWikipediaFail = (error) => {
  return {
    type: actionTypes.GET_WIKIPEDIA_FAIL,
    error: error,
  };
};

export const getWikipedia = (date) => {
  return (dispatch) => {
    dispatch(getWikipediaStart());
    axios
      .get(
        'https://historicalcalendarconverter.firebaseio.com/' +
          date +
          '/0/data.json'
      )
      .then((response) => {
        dispatch(getWikipediaSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getWikipediaFail(error));
      });
  };
};

export const getNYTimesStart = () => {
  return {
    type: actionTypes.GET_NYTIMES_START,
  };
};

export const getNYTimesSuccess = (json) => {
  return {
    type: actionTypes.GET_NYTIMES_SUCCESS,
    NYTimesData: json,
  };
};

export const getNYTimesFail = (error) => {
  return {
    type: actionTypes.GET_NYTIMES_FAIL,
    error: error,
  };
};

export const getNYTimes = (date) => {
  return (dispatch) => {
    dispatch(getNYTimesStart());
    axios
      .get('https://onthisdaydatabase.firebaseio.com/NYtimes/' + date + '.json')
      .then((response) => {
        dispatch(getNYTimesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getNYTimesFail(error));
      });
  };
};
