import {SET_EVENTS, SET_LOADING} from '../constants';

export const setEvents = events => ({
  type: SET_EVENTS,
  payload: {events: events},
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: {loading: loading},
});
