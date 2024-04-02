import { useActivity } from "./useActivity";
import Spinner from "../../ui/Spinner";
import ActivityRow from "./ActivityRow";
import { Table, TableBody, TableHeader } from "../../ui/Table";

function ActivityTable() {
    const { isPending, activities, error } = useActivity();

    if (isPending) {
        return <Spinner />;
    }
    return (
        <Table role="table">
            <TableHeader
                role="row"
                as="header"
                columns="2fr 0.7fr 2.3fr 1fr 1fr 1fr 1fr 0.3fr"
            >
                <div>Image</div>
                <div>Name</div>
                <div>Description</div>
                <div>Type</div>
                <div>Max Capacity</div>
                <div>Regular Price</div>
                <div>Discount</div>
                {/* <div>Delete</div> */}
            </TableHeader>
            <TableBody>
                {activities.map((activity) => (
                    <ActivityRow key={activity.id} activity={activity} />
                ))}
            </TableBody>
        </Table>
    );
}

export default ActivityTable;
