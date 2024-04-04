import { useState } from "react";
import { AtSignIcon, LinkIcon } from "@chakra-ui/icons";
import { Input, Heading, InputGroup, InputLeftElement, InputRightElement, Button, Stack, Alert, AlertIcon } from "@chakra-ui/react";

import { Container } from "./style";

/* UI */
import { Label } from "../../../components/ui/label";
import { AuthDTO } from "../../../services/models/Auth.model";
import { AuthService } from "../../../services/auth/Auth.service";


const Login = (): React.ReactElement => {
	const authService = new AuthService();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [passwordIsShowing, setPasswordIsShowing] = useState<boolean>(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		setIsLoading(true);
		const credentials: AuthDTO = { email, password };
		console.log(credentials);

		authService.getToken(credentials).then(data => {
			//authService.setToken(data.token);
			setIsLoading(false);
		});
	}

	return (
		<Container>
			<Stack spacing={12} maxWidth="500px" width="100%">
				<Stack spacing={0}>
					<Heading as="h1">Login</Heading>
					<Heading as="h2" size="1xl">Entre com sua conta</Heading>
				</Stack>

				<form onSubmit={ handleSubmit }>
					<Stack spacing={12}>
						<Stack spacing={8}>
							<Stack spacing={0}>
								<Label>E-mail <span>*</span></Label>
								<InputGroup size="md">
									<InputLeftElement pointerEvents="none">
										<AtSignIcon color="gray.300" fontSize="1.2em" />
									</InputLeftElement>
									<Input placeholder="Insira seu email" type="email" required={ true } value={ email } onChange={ (e) => setEmail(e.target.value) } />
								</InputGroup>
							</Stack>

							<Stack spacing={0}>
								<Label>Password <span>*</span></Label>
								<InputGroup size="md">
									<InputLeftElement pointerEvents="none">
										<LinkIcon color="gray.300" fontSize="1.2em" />
									</InputLeftElement>

									<Input pr="4.5rem" type={ passwordIsShowing ? "text" : "password" } placeholder="Enter password" required={ true } value={ password } onChange={ (e) => setPassword(e.target.value) } />
									
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={ () => setPasswordIsShowing(!passwordIsShowing) }>
											{ passwordIsShowing ? "Esconder" : "Ver" }
										</Button>
									</InputRightElement>
								</InputGroup>
							</Stack>
						</Stack>

						<Button
							type="submit"
							variant="outline"
							colorScheme="teal"
							isLoading={ isLoading }
							loadingText="Carregando"
						>
							Entrar
						</Button>
					</Stack>
				</form>
			</Stack>
		</Container>
	);
}

export { Login };
