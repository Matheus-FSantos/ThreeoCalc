import { LabelStyle } from "./style";

interface ILabelProps {
	children?: any
}

const Label = ({ children }: ILabelProps): React.ReactElement => {
	return <LabelStyle>{ children }</LabelStyle>
}

export { Label };
