import { UserDTO } from "../models/Users.model";
import { UsersRepository } from "../repositories/Users.repository";
import { ThreeoCalcExceptions } from "../interfaces/Exceptions.interface";


export class UsersService {
	constructor(private readonly userRepository: UsersRepository){ }

	findByEmail = (email: string): UserDTO => {
		const user: UserDTO | undefined = this.userRepository.findAll().find(user => user.email === email);

		if (!user)
			throw new ThreeoCalcExceptions("You called the method to log in, however, your username and/or password is invalid!", "You called the method to log in, however, your username and/or password is invalid!");
		
		return user;
	}

}
