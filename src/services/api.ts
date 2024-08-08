import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import {api} from "./axios"
import authStore from "../store/authStore"
import {LoginForm,RegisterForm} from '../interfaces';


export const SignIn = async(data:LoginForm) => {
	const response: AxiosResponse = await api.post("/auth/login",data)
	if(response){
		authStore.getState().setAuth(response?.data)
		return response.data.message
	}
	// try{
		// const response: AxiosResponse = await api.post("/auth/login",data)
		// if(response){
			// authStore.getState().setAuth(response?.data)
			// return response.data.message
		// }
	// }catch(err:AxiosError){
		// console.log(err)
	// }
}

export const SignUp = async(data:RegisterForm) => {
	const response: AxiosResponse = await api.post("/auth/register",data)
	if(response){
		authStore.getState().setAuth(response?.data)
		return response.data.message
	}
	// try{
		// const response: AxiosResponse = await api.post("/auth/register",data)
		// if(response){
			// authStore.getState().setAuth(response?.data)
			// return response.data.message
		// }
	// }catch(err:AxiosError){
		// console.log(err)
	// }
}

export const VerifyRefreshToken = async() => {
	const response: AxiosResponse = await api.get("/auth/verify-refresh-token")
	if(response){
		authStore.getState().setAuth(response?.data)
		return "OK"
	}
}

export const Logout = async() => {
	const response: AxiosResponse = await api.post("/auth/logout")
	if(response){
		authStore.getState().removeAuth()
		return response.data.message
	}
	
}

export const Delete = async(data:string) => {
	const response: AxiosResponse = await api.post(`/auth/delete-account/${data}`)
	if(response){
		authStore.getState().removeAuth()
		return response.data.message
	}
	
}




