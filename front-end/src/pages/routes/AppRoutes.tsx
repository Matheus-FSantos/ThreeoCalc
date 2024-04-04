import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../auth/login";
import { Home } from "../auth/home";

const AppRoutes = (): React.ReactElement => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export { AppRoutes };
