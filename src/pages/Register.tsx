import {Link} from "react-router-dom"

import {useMutation} from '@tanstack/react-query'

import {useState} from "react"

import {SignUp} from "../services/api"
import authStore from "../store/authStore"
import {RegisterForm} from "../interfaces"

import {toastError} from "../utils/useToast"

import Input from "../components/Input"
import Button from "../components/Button"

export default function Register(){

	document.title = "JWT Auth || Sign Up"
	
	const {setAuth} = authStore((state) => ({setAuth: state.setAuth}))
	
	const {
		mutate:register,
		data:result,
		isPending,
		isSuccess,
		isError,
		error
	} = useMutation({
		mutationFn: (registerForm:RegisterForm) => SignUp(registerForm),
		onError: (err: any) => toastError(err?.response?.data?.message)
		
	})
	
	
	
	const [registerForm,setRegisterForm] = useState<RegisterForm>({email:"", username:"", password:""})
	
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setRegisterForm(prev => ({...prev, [e.target.name] : e.target.value}))
	
	const handleRegister = () => register(registerForm as RegisterForm)
	
	const registerWithPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter" || e.key === "NumpadEnter"){
			register(registerForm as RegisterForm)
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
							name="email" 
							placeholder="Mail Address" 
							onChange={onChange}
							onKeyUp={registerWithPressEnter}
						/>
						<Input
							type="text" 
							name="username" 
							placeholder="Username" 
							onChange={onChange}
							onKeyUp={registerWithPressEnter}
						/>
						<Input
							type="password" 
							name="password" 
							placeholder="Password" 
							onChange={onChange}
							onKeyUp={registerWithPressEnter}
						/>
						<Button 
							onClick={handleRegister} 
							disabled={isPending ? true : false}
						>{isPending ? "Please Wait..." : "Register"}</Button>
						<span>
							Have an account?  <Link to="/login">Login</Link>
						</span>
					</section>
				</div>
			</section>
		</main>
	)
}

