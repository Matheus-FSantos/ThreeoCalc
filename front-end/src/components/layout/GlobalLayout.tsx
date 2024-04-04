import { GlobalLayoutContainer } from "./style";

interface IGlobalLayoutProps {
	children: any
}

const GlobalLayout = ({ children }: IGlobalLayoutProps): React.ReactElement => {
	return (
		<GlobalLayoutContainer>
			{ children }
		</GlobalLayoutContainer>
	);
}

export { GlobalLayout };
