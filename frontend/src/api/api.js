import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = async (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const getCourses = async () => axios.get(`${API_URL}/courses`);
export const createCourse = async (courseData) => axios.post(`${API_URL}/courses`, courseData);
export const updateCourse = async (id, courseData) => axios.put(`${API_URL}/courses/${id}`, courseData);
export const deleteCourse = async (id) => axios.delete(`${API_URL}/courses/${id}`);
