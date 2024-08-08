import CryptoJS from 'crypto-js';
import { jwtDecode } from "jwt-decode";



export const encryptData = (data: string) => {
	const encrypted = CryptoJS.AES.encrypt(data, import.meta.env.VITE_CRYPTO_SECRET_KEY as string).toString();
	return encrypted
}
	
export const decryptData = (data: string) => {
	const decrypted = CryptoJS.AES.decrypt(data, import.meta.env.VITE_CRYPTO_SECRET_KEY as string).toString(CryptoJS.enc.Utf8);
	return decrypted
}

export const decodeJWT = (data: string) => {
	const decoded = jwtDecode(data)
	return decoded
}