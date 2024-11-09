import axios from 'axios';

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post('/api/auth/register', { name, email, password });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post('/api/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};