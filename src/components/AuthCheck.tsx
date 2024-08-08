import useAuth from "../services/useAuth"
import {Navigate,Outlet} from "react-router-dom"


export default function RequireAuth(){
	
	const {isError,isLoading,isSuccess,result,isInitialLoading,sessionID,auth} = useAuth()
	
	
	
	if(isError || !sessionID){
		return <Outlet/>
	}else if(!isLoading && isSuccess){
		return <Navigate to="/" />
	}else if(auth && !isInitialLoading){
		return <Navigate to="/" />
	}
	
}