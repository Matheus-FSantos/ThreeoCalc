import { UserDTO } from "../interfaces/Users.interface";

export class UsersRepository {

	/* MOCK DATA */
	findAll = (): UserDTO[] => {
		return [
			{
				id: "3052024f-fa88-4427-8517-ee1179931b10",
				email: "admin@admin.com",
				password: "$2a$08$VgI3mSFUb9oYSkzhfY5v0Oc9cnjDQ.qK3GiH79QRPOmqgiT3kFMcq"
			},
			{
				id: "bece854e-9da3-43f4-a3f7-f59a94ad0c4d",
				email: "matheus@gmail.com",
				password: "$2a$08$ek/sh95d5bHrsL5KN38vdui4mFU0yDfeRVx/xkLjS9rnSoDJ.Z1U6"
			},
			{
				id: "60ab60ba-53c8-4382-9527-560bc2f38701",
				email: "email-teste@threeo.com.br",
				password: "$2a$08$z1VKy5THUdHOJuGY0qXJIeEJsOU7Sjd2Po2lE1wOjuAM8rn3zNbrm"
			}
		];
	}

};
