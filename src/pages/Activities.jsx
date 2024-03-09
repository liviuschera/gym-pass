import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
import Button from "../ui/Button";
import { useState } from "react";
// import { useEffect } from "react";
// import { getActivities } from "../services/getActivities";

function Activities() {
    const [showForm, setShowForm] = useState(false);
    // useEffect(function () {
    //     (async () => console.log(await getActivities()))();
    // }, []);
    // useEffect(() => {
    //     getActivities().then((data) => console.log(data));
    // });
    return (
        <>
            <Heading>All activities</Heading>
            <ActivityTable />
            <Button onClick={() => setShowForm((show) => !show)} type="button">
                Add new activity
            </Button>
        </>
    );
}

export default Activities;
