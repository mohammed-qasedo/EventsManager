import {createStore, combineReducers} from 'redux';
import eventsReducer from './reducers/EventsReducer';

const rootReducer = combineReducers({eventsReducer: eventsReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
