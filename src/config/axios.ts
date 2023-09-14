import axios from "axios"


export const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND
})


api.interceptors.request.use(
        (config) => {
                const accessToken =localStorage.getItem("token") ;
                if (accessToken) {
                        if (config.headers) config.headers.token = accessToken;
                }
                return config;
        },
        (error) => {
                return Promise.reject(error);
        }
);