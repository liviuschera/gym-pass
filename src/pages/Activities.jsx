import Heading from "../ui/Heading";
import ActivityTable from "../features/activities/ActivityTable";
import AddActivity from "../features/activities/AddActivity";
import Row from "../ui/Row";
import ActivityTableOperations from "../features/activities/ActivityTableOperations";

function Activities() {
    return (
        <>
            <Row>
                <Heading as="h1">All activities</Heading>
                <ActivityTableOperations />
            </Row>
            <ActivityTable />
            <AddActivity />
        </>
    );
}

export default Activities;
