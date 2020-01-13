import {
  SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGES, CHANGE_MSG_STATUS,
} from './actionTypes';

export const selectMessage = (message) => ({
  type: SELECT_MESSAGE,
  message,
});

export const deleteMsg = (messages) => ({
  type: DELETE_MESSAGE,
  messages,
});

export const addMessages = (messages) => ({
  type: ADD_MESSAGES,
  messages,
});

export const changeMessageStatus = (status) => ({
  type: CHANGE_MSG_STATUS,
  status,
});
