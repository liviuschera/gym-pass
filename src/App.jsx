import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: turquoise;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <div>
                <Heading as="h1">Gym Pass</Heading>
                <Heading as="h2">Gym Pass</Heading>
                <Heading as="h3">Gym Pass</Heading>
            </div>
        </>
    );
}

export default App;
