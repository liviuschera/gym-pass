import { useActivity } from "./useActivity";
import Spinner from "../../ui/Spinner";
import ActivityRow from "./ActivityRow";
import { Empty, Table, TableBody, TableHeader } from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function ActivityTable() {
    const { isPending, activities, error } = useActivity();
    const [searchParams] = useSearchParams();

    if (isPending) {
        return <Spinner />;
    }

    if (!activities.length) {
        return <Empty>No activities found.</Empty>;
    }
    // //////////////////////////////////////
    // FILTERING
    function getFilteredActivity(params) {
        const discountParams = params.get("discount") || "all";
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
    const filteredActivities = getFilteredActivity(searchParams);

    // //////////////////////////////////////
    // SORTING
    function getSortedActivity(params, filteredActivities) {
        const sortBy = params.get("sortBy") || "name-asc";
        const [filedName, direction] = sortBy.split("-");
        const comparisonOperator = direction === "asc" ? 1 : -1;

        const sortActivities = filteredActivities.sort((a, b) => {
            if (typeof a[filedName] === "string") {
                return (
                    a[filedName].localeCompare(b[filedName]) *
                    comparisonOperator
                );
            } else {
                return (a[filedName] - b[filedName]) * comparisonOperator; //reverse order if descending order is selected}
            }
        });

        return sortActivities;
    }

    const sortedActivities = getSortedActivity(
        searchParams,
        filteredActivities
    );

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
            </TableHeader>
            <TableBody>
                {sortedActivities.map((activity) => {
                    return (
                        <ActivityRow key={activity.id} activity={activity} />
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default ActivityTable;
