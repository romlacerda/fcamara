import axios from 'axios';

// Remember: the baseURL depends of your json-server url/port!
axios.defaults.baseURL = 'http://localhost:4000';

export const getMessages = () => axios.get(`${axios.defaults.baseURL}/messages`).then((response) => response).catch((er) => { throw new Error(er.message); });

export const insertMessage = (message) => axios.post(`${axios.defaults.baseURL}/messages`, {
  date: message.date,
  name: message.name,
  email: message.email,
  subject: message.subject,
  phone: message.phone,
  body: message.body,
}).then((response) => response).catch((er) => { throw new Error(er.message); });

export const deleteMessage = (messageId) => axios.delete(`${axios.defaults.baseURL}/messages/${messageId}`)
  .then((response) => response).catch((er) => { throw new Error(er.message); });

export const getSubjects = () => axios.get(`${axios.defaults.baseURL}/subjects`).then((response) => response).catch((er) => { throw new Error(er.message); });
