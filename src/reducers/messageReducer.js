import {
  SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGES, CHANGE_MSG_STATUS,
} from '../actions/actionTypes';

const initialState = {
  messageSelected: null,
  messages: [],
  deleted: false,
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
        deleted: true,
      };
    case ADD_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case CHANGE_MSG_STATUS:
      return {
        ...state,
        deleted: action.status,
      };
    default:
      return state;
  }
};

export default messageReducer;
