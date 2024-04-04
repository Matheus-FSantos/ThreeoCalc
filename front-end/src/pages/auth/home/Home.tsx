import { useState } from "react";
import { toast } from "react-toastify";
import { FlexContainer } from "./style";
import { Toast } from "../../../components/toast";
import { RepeatIcon, StarIcon } from "@chakra-ui/icons";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { AuthService } from "../../../services/auth/Auth.service";
import { PrivateRoute } from "../../../components/auth/private-route"
import { GlobalLayout } from "../../../components/layout/GlobalLayout";
import { CalculationDTO } from "../../../services/models/Calculation.model";
import { CalculationService } from "../../../services/calculation/Calculation.service";
import { Button, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";

const Home = (): React.ReactElement => {
	useDinamicTitle("Inicio");
	const authService = new AuthService();
	const calculationService = new CalculationService();

	const [operation, setOperation] = useState<string>("");

	const [total, setTotal] = useState<string>("");
	const [firstNumber, setFirstNumber] = useState<number>(0);
	const [secondNumber, setSecondNumber] = useState<number>(0);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		setIsLoading(true);
		setIsDisabled(true);

		try {
			const token = authService.getTokenBySession();
			const body: CalculationDTO = {
				firstNumber,
				secondNumber
			};

			calculationService.calculate(token, operation, body).then(data => {
				setTotal(data.total);
				setIsLoading(false);
				setIsDisabled(false);
			}).catch(error => {
				console.clear();
				setIsLoading(false);
				setIsDisabled(false);

				toast.error(`Erro na requisição: ${ error.message }`, {
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
		} catch (error) {
			handleLogout();
		}
	}

	const handleLogout = (): void => {
		authService.logout();
		window.location.reload();
	}
	
	return (
		<PrivateRoute>
			<GlobalLayout>
				<Stack spacing={ 16 } maxWidth="1000px" width="100%">
					<Stack spacing={0} align="center">
						<Heading as="h1">ThreeoCalc</Heading>
						<Heading as="h2" size="1xl">Realize uma operação matemática abaixo.</Heading>
						<Text fontWeight="bold" fontSize="xs" color="gray.400" textAlign="center">Developed by Matheus Ferreira Santos.</Text>
					</Stack>

					<form onSubmit={ handleSubmit }>
						<Stack spacing={ 16 }>
							<FlexContainer>
								<InputGroup size="md">
									<InputLeftElement pointerEvents="none">
										<StarIcon color="gray.300" />
									</InputLeftElement>
									<Input placeholder="Insira o primeiro número" type="number" required={ true } value={ firstNumber } onChange={ (e) => setFirstNumber(Number(e.target.value)) }/>
								</InputGroup>

								<RepeatIcon color="gray.300" />

								<InputGroup size="md">
									<InputLeftElement pointerEvents="none">
										<StarIcon color="gray.300" />
									</InputLeftElement>
									<Input placeholder="Insira o segundo número" type="number" required={ true } value={ secondNumber } onChange={ (e) => setSecondNumber(Number(e.target.value)) }/>
								</InputGroup>
							</FlexContainer>

							<Stack spacing={ 0 }>
								<Text fontWeight="bold" color="gray.500" textAlign="center">Resultado: { total ? total : "Realize uma conta..."}</Text>
								<Text fontWeight="bold" fontSize="10px" color="gray.500" textAlign="center">{ total && "(Apenas 2 casas decimáis)"}</Text>
							</Stack>

							<FlexContainer>
								<Button
									type="submit"
									colorScheme="blue"
									disabled={ isDisabled }
									isLoading={ isLoading }
									onClick={ () => setOperation("addition") }
								>+</Button>

								<Button 
									type="submit"
									colorScheme="yellow"
									disabled={ isDisabled }
									isLoading={ isLoading }
									onClick={ () => setOperation("subtraction") }
								>&minus;</Button>

								<Button 
									type="submit"
									colorScheme="green"
									disabled={ isDisabled }
									isLoading={ isLoading }
									onClick={ () => setOperation("multiply") }
								>&times;</Button>
								
								<Button 
									type="submit"
									colorScheme="pink"
									disabled={ isDisabled }
									isLoading={ isLoading }
									onClick={ () => setOperation("division") }
								>&divide;</Button>
							</FlexContainer>
						</Stack>
					</form>

					<Button
						variant="ghost"
						colorScheme="red"
						disabled={ isDisabled }
						isLoading={ isLoading }
						loadingText="Calculando..."
						onClick={ handleLogout }>Sair</Button>
				</Stack>

				<Toast />
			</GlobalLayout>
		</PrivateRoute>
	);
}

export { Home };
