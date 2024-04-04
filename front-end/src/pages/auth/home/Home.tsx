import { PrivateRoute } from "../../../components/auth/private-route"

const Home = (): React.ReactElement => {
	return(
		<PrivateRoute>
			<div>Home page</div>
		</PrivateRoute>
	);
}

export { Home };
