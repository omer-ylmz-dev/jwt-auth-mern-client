import {ButtonProps} from "../interfaces"

export default function Button({onClick,children} : ButtonProps){
	return(
		<button type="button" onClick={onClick}>{children}</button>
	)
}