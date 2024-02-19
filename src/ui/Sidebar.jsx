import styled from "styled-components";

const StyledSidebar = styled.aside`
    /* grid-column: 1; */
    grid-row: 1/-1;
    background-color: yellowgreen;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid grey;
`;

function Sidebar() {
    return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
