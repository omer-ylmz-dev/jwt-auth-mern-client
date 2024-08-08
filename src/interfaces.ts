export interface AuthData{
	message?:string;
	accessToken:string;
}   

export interface LoginForm{
	username:string;
	password:string;
} 

export interface RegisterForm extends LoginForm{
	email:string;
} 

export interface InputProps{
	type:"text" | "password";
	placeholder:"Username" | "Password" | "Mail Address";
	name:"username" | "password" | "email";
	onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyUp:(e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface ButtonProps{
	onClick:React.MouseEventHandler<HTMLButtonElement>;
	disabled:boolean;
	children:React.ReactNode;
}