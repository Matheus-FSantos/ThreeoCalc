import { Link } from "react-router-dom";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../components/layout/GlobalLayout";

const Error = (): React.ReactElement => {
	useDinamicTitle("Erro");

	return (
		<GlobalLayout>
			<Stack spacing={0} align="center">
				<Heading as="h1">404 - Not Found!</Heading>
				<Heading as="h2" size="1xl">Página não encontrada, <Link to="/"><span style={{ textDecoration: "underline" }}>clique aqui</span></Link> para voltar para o inicio</Heading>
				<Text fontWeight="bold" fontSize="xs" color="gray.400" textAlign="center">Developed by Matheus Ferreira Santos.</Text>
			</Stack>
		</GlobalLayout>
	);
}

export { Error };
