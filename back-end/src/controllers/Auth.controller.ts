import { Response } from "express";
import { AuthService } from "../services/Auth.service";
import { UserRequestBodyDTO } from "../models/Users.model";
import { TypedRequestBody } from "../interfaces/TypedRequests.interfaces";
import { ThreeoCalcExceptions } from "../interfaces/Exceptions.interface";

export class AuthController {
	constructor(private readonly authService: AuthService){ }

  auth = async (request: TypedRequestBody<UserRequestBodyDTO>, response: Response) => {
		const body = {
			email: request.body.email,
			password: request.body.password,
		};

		try {
			const token = await this.authService.auth(body);
			response.status(200).json({ token });
		} catch (error) {
			if(error instanceof ThreeoCalcExceptions)
				response.status(401).json(error);
			else
        response.status(500).json(error);
		}
  }

}
