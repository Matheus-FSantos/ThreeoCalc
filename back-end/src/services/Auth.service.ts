import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersService } from "./Users.service";
import { ThreeoCalcExceptions } from "../interfaces/Exceptions.interface";
import { UserDTO, UserRequestBodyDTO } from "../interfaces/Users.interface";

export class AuthService {

	private userService = new UsersService();
	
	auth = async (body: UserRequestBodyDTO): Promise<string> => {
		const user: UserDTO = this.userService.findByEmail(body.email);
		const isValidPassword = await compare(body.password, user.password);
		
		if (!isValidPassword)
			throw new ThreeoCalcExceptions("You called the method to log in, however, your username and/or password is invalid!", "You called the method to log in, however, your username and/or password is invalid!");

		const token = sign( { id: user.id }, "6affbde69d1c5a90bb700c686ea0aa33", { expiresIn: "1d" } );
		return token;
	};
	
}
