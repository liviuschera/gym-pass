import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
import AddActivity from "../components/activities/AddActivity";

function Activities() {
    return (
        <>
            <Heading>All activities</Heading>
            <ActivityTable />
            <AddActivity />
        </>
    );
}

export default Activities;
