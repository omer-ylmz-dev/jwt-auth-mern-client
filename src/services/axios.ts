import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import {decryptData} from "../utils/useCrypto"

export default axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
});

export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: { 'Content-Type': 'application/json' } as RawAxiosRequestHeaders,
    withCredentials: true
});


api.interceptors.request.use((request) => {

	const token = localStorage.getItem("sessionID")
	
	if(token){
		let BearerToken = JSON.parse(decryptData(token))
		request.headers['Authorization'] = `Bearer ${BearerToken}`;
	}
	
	return request
		
});

