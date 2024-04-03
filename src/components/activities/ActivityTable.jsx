import { useActivity } from "./useActivity";
import Spinner from "../../ui/Spinner";
import ActivityRow from "./ActivityRow";
import { Table, TableBody, TableHeader } from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function ActivityTable() {
    const { isPending, activities, error } = useActivity();
    const [searchParams, setSearchParams] = useSearchParams();

    function getFilteredActivity(params) {
        const discountParams = params.get("discount");
        const withDiscount = activities.filter(
            (activity) => activity.discount > 0
        );
        const noDiscount = activities.filter(
            (activity) => activity.discount === 0
        );

        switch (discountParams) {
            case "with-discount":
                return withDiscount;
            case "no-discount":
                return noDiscount;
            default:
                return activities;
        }
    }

    if (isPending) {
        return <Spinner />;
    }
    return (
        <Table role="table">
            <TableHeader
                role="row"
                as="header"
                columns="2fr 1fr 2.3fr 1fr 1fr 1fr 1fr 0.3fr"
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
                {getFilteredActivity(searchParams).map((activity) => {
                    return (
                        <ActivityRow key={activity.id} activity={activity} />
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default ActivityTable;
