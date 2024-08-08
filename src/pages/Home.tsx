import {useMutation} from '@tanstack/react-query'
import authStore from "../store/authStore"
import {Logout,Delete} from "../services/api"

export default function Home(){
	document.title = "JWT Auth"
	
	const {auth,removeAuth} = authStore((state) => ({ auth:state.auth, removeAuth:state.removeAuth }))
	
	const { mutate: logout, data:logoutStatus} = useMutation({mutationFn:Logout})
	
	const { mutate: deleteAccount, data:deleteStatus} = 
	useMutation({mutationFn:(auth:string) => Delete(auth),onSuccess: (data) => console.log(data)})
	
	const handleLogout = () => logout()
	
	const handleDelete = () => {
		const choice = confirm("Are you sure you want to delete your account?")
		if(choice === true){
			deleteAccount(auth as string)
		}
	}
	
	
	return(
		<main className="home">
			<header>
				<div>
					<span>JWT Auth</span>
				</div>
				<div>
					<div>Welcome, {auth}</div>
					<div onClick={handleDelete}>Delete Account</div>
					<div onClick={handleLogout}>Logout</div>
				</div>
			</header>
			<section>
				<header>You are on Home Page</header>
				<article>If you want to log out, please click the "Logout" button on the right corner</article>
			</section>
		</main>
	)
}