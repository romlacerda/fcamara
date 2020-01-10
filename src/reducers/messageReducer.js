import {
  SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGES,
} from '../actions/actionTypes';

const initialState = {
  messageSelected: null,
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MESSAGE:
      return {
        ...state,
        messageSelected: action.message,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      };
    case ADD_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default messageReducer;
