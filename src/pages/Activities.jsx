import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
// import { useEffect } from "react";
// import { getActivities } from "../services/getActivities";

function Activities() {
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
        </>
    );
}

export default Activities;
