import {useQuery} from '@tanstack/react-query'
import {VerifyRefreshToken} from "./api"
import authStore from "../store/authStore"



export default function useAuth(){
	const {auth,setAuth} = authStore((state) => ({ auth:state.auth, setAuth:state.setAuth }))
	const sessionID:string | null = localStorage.getItem("sessionID")
	
	
	const {
		data:result,
		isSuccess,
		isPending,
		isFetching,
		isInitialLoading,
		isLoading, 
		isError,
		error
	} = useQuery({queryKey:["auth"],enabled:!auth && sessionID ? true : false,queryFn:VerifyRefreshToken})
	
	return {isError,isLoading,isSuccess,result,isInitialLoading,sessionID,auth}
	
}