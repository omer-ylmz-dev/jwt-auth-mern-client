import {BrowserRouter,Routes,Route} from "react-router-dom"


import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"


import RequireAuth from "./components/RequireAuth"
import AuthCheck from "./components/AuthCheck"

import { ToastContainer } from 'react-toastify';


export default function App(){
	
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RequireAuth/>} >
					<Route index element={<Home />} />
				</Route>
				<Route path="/login" element={<AuthCheck/>}>
					<Route index element={<Login />} />
				</Route>
				<Route path="/register" element={<AuthCheck/>}>
					<Route index element={<Register />} />
				</Route>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
		
	)
}
