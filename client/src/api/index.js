import axios from 'axios';

// TODO: host/port to constant
const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getUsers = () => httpClient.get('/users');
