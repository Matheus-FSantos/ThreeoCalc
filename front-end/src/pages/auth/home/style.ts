import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;

	padding: 20px;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;
	justify-content: center;

	gap: 1.625rem;
`;

export { Container, FlexContainer };
