import { createWithEqualityFn as create } from 'zustand/traditional'
import {shallow} from "zustand/shallow"
import {AuthData} from '../interfaces';
import {decodeJWT,encryptData,decryptData} from "../utils/useCrypto"

interface authStoreState{
  auth: string | null;
  setAuth: (data: AuthData) => void;
  removeAuth: () => void;
}

const auth: string | null = null

const sessionID: string | null = localStorage.getItem("sessionID");


const authStore = create<authStoreState>((set) => ({
	auth:auth,
	setAuth: (data: AuthData) => {
		if(data){
			const token:any = decodeJWT(data?.accessToken)
			set(() => ({auth:token.username}))
			
			if(sessionID === null || JSON.parse(decryptData(sessionID)) !== data?.accessToken){
				localStorage.setItem("sessionID",encryptData(JSON.stringify(data?.accessToken)))
			}

		}
	},
	removeAuth: () => {
		localStorage.clear()
		set(() => ({auth:null}))
	}
}));

export default authStore;