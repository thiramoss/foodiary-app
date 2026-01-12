import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://6bvs6f3q9c.execute-api.us-east-1.amazonaws.com',
});