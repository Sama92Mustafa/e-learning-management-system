import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => axios.post(`${API_URL}/auth/signup`, userData);
export const loginUser = async (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const getCourses = async () => axios.get(`${API_URL}/courses`);
export const createCourse = async (courseData) => axios.post(`${API_URL}/courses`, courseData);
