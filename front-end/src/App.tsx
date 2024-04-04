import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./pages/routes";

const App = () => {
  return (
		<ChakraProvider>
			<AppRoutes />
		</ChakraProvider>
  )
}

export { App };
