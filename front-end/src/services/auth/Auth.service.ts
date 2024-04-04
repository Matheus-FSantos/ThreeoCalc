import { API_INSTANCE } from "../config/Axios.config";
import { AuthDTO } from "../models/Auth.model";

export class AuthService {

	isLogged = (): boolean => {
		if(sessionStorage.getItem("token"))
			return true;

		return false;
	}

	logout = (): void => {
		sessionStorage.clear();
	}

	setToken = (token: string) => {
		sessionStorage.setItem("token", token);
	}

	getToken = async (credentials: AuthDTO) => {
		return await API_INSTANCE.post("/login", credentials).then((data) => {
			this.setToken(data.data.token);
		}).catch((error) => {
			const status = error.response.status;
			
			if(status === 401)
				throw new Error("Campos inválidos");
			
			throw new Error(error.message)
		});
	}

	getTokenBySession = (): string => {
		if(sessionStorage.getItem("token"))
			return sessionStorage.getItem("token") + "";
		else
			throw new Error("There are no tokens here");
	}

}
