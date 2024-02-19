import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: wheat;
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid grey;
`;

function Header() {
    return <StyledHeader>StyledHeader</StyledHeader>;
}

export default Header;
