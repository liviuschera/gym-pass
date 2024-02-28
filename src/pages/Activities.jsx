import Heading from "../ui/Heading";
import { useEffect } from "react";
import { getActivities } from "../services/getActivities";

function Activities() {
    useEffect(function () {
        (async () => console.log(await getActivities()))();
    }, []);
    // useEffect(() => {
    //     getActivities().then((data) => console.log(data));
    // });
    return (
        <div>
            <Heading>Activities</Heading>
            <img
                src="https://oqzbsvoiuqdvtusqzwbc.supabase.co/storage/v1/object/public/activities-images/bodypump.jpg"
                alt="BODYPUMP class"
            />
        </div>
    );
}

export default Activities;
