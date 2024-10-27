import axios from 'axios';

// TODO: host/port to constant
const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

// if js-object => Content-Type: Application/json
//    data => req.body
// if FormData => Content-Type: multipart/form-data
//    data (text) => (multer) => req.body
//    data (file) => (multer) => req.file
export const createUser = body => httpClient.post('/users', body);

export const getUsers = () => httpClient.get('/users');

export const removeUser = id => httpClient.delete(`/users/${id}`);
