import axios from "axios";

// Cria uma instância do Axios para a API
export const api = axios.create({
    baseURL: 'http://192.168.5.106:5000',
});

// Interceptor para lidar com erros
api.interceptors.response.use(
    response => response,
    error => {
        // Aqui você pode tratar os erros globalmente
        console.error('Erro na requisição:', error);
        return Promise.reject(error);
    }
);
