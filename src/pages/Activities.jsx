import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
import AddActivity from "../components/activities/AddActivity";
import Row from "../ui/Row";
import ActivityTableOperations from "../components/activities/ActivityTableOperations";

function Activities() {
    return (
        <>
            <Row>
                <Heading>All activities</Heading>
                <ActivityTableOperations />
            </Row>
            <ActivityTable />
            <AddActivity />
        </>
    );
}

export default Activities;
