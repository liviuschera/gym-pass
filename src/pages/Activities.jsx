import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
import AddCabin from "../components/activities/AddCabin";

function Activities() {
    return (
        <>
            <Heading>All activities</Heading>
            <ActivityTable />
            <AddCabin />
        </>
    );
}

export default Activities;
