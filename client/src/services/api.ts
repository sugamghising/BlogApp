import axios from "axios";
import { Article, ArticleInput } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
})

export const getArticles = async (): Promise<Article[]> => {
    const response = await api.get('/api/articles')
    return response.data;
}

export const getArticleById = async (id: string): Promise<Article> => {
    const response = await api.get(`/api/articles/${id}`);
    return response.data;
};

export const createArticle = async (article: ArticleInput): Promise<Article> => {
    const response = await api.post('/api/admin/articles', article);
    return response.data;
};

export const updateArticle = async (id: string, article: ArticleInput): Promise<Article> => {
    const response = await api.put(`/api/admin/articles/${id}`, article);
    return response.data;
};


export const deleteArticle = async (id: string): Promise<void> => {
    await api.delete(`/api/admin/articles/${id}`);
};



// Auth APIs
export const loginAdmin = async (username: string, password: string): Promise<{ message: string }> => {
    const response = await api.post('/api/admin/login', { username, password });
    return response.data;
};

export const logoutAdmin = async (): Promise<void> => {
    await api.get('/api/admin/register'); // Note: Your backend uses this endpoint for logout
};


export default api;