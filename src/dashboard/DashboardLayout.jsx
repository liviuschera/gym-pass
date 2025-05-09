import styled from "styled-components";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;

function DashboardLayout() {
    return (
        <StyledDashboardLayout>
            <div>Statistics</div>
            <div>Today Activity</div>
            <div> Chart</div>
            <div>Sales Chart</div>
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;
