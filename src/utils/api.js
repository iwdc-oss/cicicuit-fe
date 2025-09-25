import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token)
export const clearToken = () => localStorage.removeItem('token');

export async function login({ username, password }) {
    const { data } = await axios.post(`${API_BASE}/users/login`, {username, password});
    return data;
}

export async function getMe() {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const { data } = await axios.get(`${API_BASE}/users/me`, { headers });
    return data;
}

export async function logout() {
    const token = getToken();
    if (!token) return { message: 'No Token'};
    const {data} = await axios.post(`${API_BASE}/users/logout`);
    return data;
}