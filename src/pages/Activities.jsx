import Heading from "../ui/Heading";
import ActivityTable from "../components/activities/ActivityTable";
import Button from "../ui/Button";
import { useState } from "react";
import Input from "../ui/Input";
// import { useEffect } from "react";
// import { getActivities } from "../services/getActivities";

function Activities() {
    const [show, setShow] = useState(false);
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
            <Button onClick={() => setShow((show) => !show)}>
                Add new activity
            </Button>
            {show && (
                <div>
                    Show
                    <Input placeholder="Name" type="text"></Input>
                </div>
            )}
        </>
    );
}

export default Activities;
