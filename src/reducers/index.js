import { combineReducers } from 'redux';
import messageReducer from './messageReducer';

const Reducers = combineReducers({
  messageState: messageReducer,
});

export default Reducers;
