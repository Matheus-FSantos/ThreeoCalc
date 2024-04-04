import { API_INSTANCE } from "../config/Axios.config";
import { CalculationDTO } from "../models/Calculation.model";

export class CalculationService {
	calculate = async (token: string, operation: string, body: CalculationDTO) => {
		return await API_INSTANCE.post(`/calculate?operation=${ operation }`, body, {
			headers: { Authorization: `Bearer ${ token }` }
		}).then((data) => data.data).catch((error) => { throw new Error(error.message); });
	}

}
