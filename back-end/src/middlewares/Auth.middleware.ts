import { verify } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { TokenPayloadDTO } from "../interfaces/Token.interface";
import { MiddlewareRequest } from "../interfaces/Middleware.interface";

const AuthMiddleware = (request: MiddlewareRequest, response: Response, next: NextFunction) => {
	const { authorization } = request.headers;

	if(!authorization)
		response.status(401).json({ messages: "Forbidden", description: "Token not provided." });
	else {
		const token = authorization.split(" ")[1];

		try {
			const decoded = verify(token, "6affbde69d1c5a90bb700c686ea0aa33");
			const { id } = decoded as TokenPayloadDTO;
			request.userId = id;
			next();
		} catch (error) {
			response.status(401).json({ messages: "Forbidden", description: "Invalid token." })
		}
	}
}

export { AuthMiddleware };
