import {InputProps} from "../interfaces"

export default function Input(props: InputProps){
	return(
		<input 
			{...props}
		/>
	)
}