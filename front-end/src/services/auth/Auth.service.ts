import { API_INSTANCE } from "../config/Axios.config";
import { AuthDTO } from "../models/Auth.model";

export class AuthService {

	isLogged = (): boolean => {
		if(sessionStorage.getItem("token"))
			return true;

		return false;
	}

	setToken = (token: string) => {
		sessionStorage.setItem("token", token);
	}

	getToken = async (credentials: AuthDTO) => {
		return await API_INSTANCE.post("/login", credentials).then((data) => data.data).catch((error) => {
			console.log(error);
		})
	}

}
