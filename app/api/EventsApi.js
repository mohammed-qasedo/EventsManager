import axios from 'axios';
import {setEvents, setLoading} from '../redux/actions/EventsActions';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const loadEvents = dispatch => {
  dispatch(setLoading(true));
  axios.get(baseUrl).then(response => {
    dispatch(setEvents(response.data));
    dispatch(setLoading(false));
  });
};
