import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardFilter from "../dashboard/DashboardFilter";

function Dashboard() {
    return (
        <>
            <Row>
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter />
            </Row>
            <DashboardLayout />
        </>
    );
}

export default Dashboard;
