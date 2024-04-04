import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AtSignIcon, LinkIcon } from "@chakra-ui/icons";
import { Input, Heading, InputGroup, InputLeftElement, InputRightElement, Button, Stack } from "@chakra-ui/react";

import { Toast } from "../../../components/toast";
import { Label } from "../../../components/ui/label";
import { useTimeout } from "../../../hooks/useTimeout";
import { AuthDTO } from "../../../services/models/Auth.model";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { AuthService } from "../../../services/auth/Auth.service";
import { GlobalLayout } from "../../../components/layout/GlobalLayout";


const Login = (): React.ReactElement => {
	useDinamicTitle("Login");
	const navigate = useNavigate();
	const authService = new AuthService();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const [passwordIsShowing, setPasswordIsShowing] = useState<boolean>(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		setIsLoading(true);
		setIsDisabled(true);
		const credentials: AuthDTO = { email, password };

		authService.getToken(credentials).then(async _ => {
			setIsLoading(false);
			toast.success("Logado! Redirecionando...", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			await useTimeout(2000);
			navigate("/");
		}).catch(error => {
			console.clear();
			setIsLoading(false);
			setIsDisabled(false);

			toast.error(`Erro ao logar: ${ error.message }`, {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		});
	}

	return (
		<GlobalLayout>
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
							disabled={ isDisabled }
							isLoading={ isLoading }
							loadingText="Carregando"
						>
							Entrar
						</Button>
					</Stack>
				</form>
			</Stack>

			<Toast />
		</GlobalLayout>
	);
}

export { Login };
