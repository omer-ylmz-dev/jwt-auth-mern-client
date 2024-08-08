import {Link} from "react-router-dom"
import {useMutation,useQueryClient} from '@tanstack/react-query'
import {useState} from "react"

import {SignIn} from "../services/api"
import authStore from "../store/authStore"
import {LoginForm} from "../interfaces"

import {toastError} from "../utils/useToast"

import Input from "../components/Input"
import Button from "../components/Button"


export default function Login(){

	const queryClient = useQueryClient();
	
	document.title = "JWT Auth || Sign In"
	
	const {setAuth} = authStore((state) => ({setAuth: state.setAuth}))
	
	const {
		mutate:login,
		data:result,
		isPending,
		isSuccess,
		isError,
		error
	} = useMutation({
		mutationFn: (loginForm: LoginForm) => SignIn(loginForm),
		onError: (err: any) => toastError(err?.response?.data?.message)
	})
	
	
	
	const [loginForm,setLoginForm] = useState<LoginForm>({username:"", password:""})
	
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setLoginForm(prev => ({...prev, [e.target.name]: e.target.value}))
	
	const handleLogin = () => login(loginForm)

	const loginWithPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter" || e.key === "NumpadEnter"){
			login(loginForm)
		}
	}
	
	return(
		<main className="auth">
			<a href="https://github.com/omer-ylmz-dev" target="_blank" className="developedBy">developed by omer-ylmz-dev</a>
			<section>
				<div>
					<header>JWT Auth</header>
				</div>
				<div className="verticalLine"></div>
				<div>
					<section>
						<Input
							type="text" 
							name="username" 
							placeholder="Username" 
							onChange={onChange}
							onKeyUp={loginWithPressEnter}
						/>
						<Input
							type="password" 
							name="password" 
							placeholder="Password" 
							onChange={onChange}
							onKeyUp={loginWithPressEnter}
						/>
						<Button 
							onClick={handleLogin} 
							disabled={isPending ? true : false}
						>{isPending ? "Please Wait..." : "Login"}</Button>
						<span>
							Don't you have an account?  <Link to="/register">Register</Link>
						</span>
					</section>
				</div>
			</section>
		</main>
	)
}

