import {SET_EVENTS, SET_LOADING} from '../constants';

const initialState = {
  events: null,
  loading: true,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload.events,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default eventsReducer;
