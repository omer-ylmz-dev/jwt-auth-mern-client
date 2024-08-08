import useAuth from "../services/useAuth"
import {Navigate,useNavigate,Outlet} from "react-router-dom"


export default function AuthCheck(){
	
	const navigation = useNavigate()
	
	const {isError,isLoading,isSuccess,result,isInitialLoading,sessionID,auth} = useAuth()
	
	
	
	if(isError || !sessionID){
		return <Navigate to="/login" />
	}else if(!isLoading && isSuccess){
		return <Outlet/>
	}else if(auth && !isInitialLoading){
		return <Outlet/>
	}
	
}