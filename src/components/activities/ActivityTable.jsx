import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getActivities } from "../../services/APIactivities";
import Spinner from "../../ui/Spinner";
import ActivityRow from "./ActivityRow";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);
    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
    font-family: "M PLUS Rounded 1c";
`;

const TableHeader = styled.header`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2fr 1fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;

    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`;

function ActivityTable() {
    const {
        isLoading,
        data: activities,
        error,
    } = useQuery({
        queryKey: ["activities"],
        queryFn: getActivities,
    });

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <Table role="table">
            <TableHeader role="row">
                <div>Image</div>
                <div>Name</div>
                {/* <div>Description</div> */}
                <div>Type</div>
                <div>Max Capacity</div>
                <div>Regular Price</div>
                <div>Discount</div>
                <div>Delete</div>
            </TableHeader>
            {activities.map((activity) => (
                <ActivityRow key={activity.id} activity={activity} />
            ))}
        </Table>
    );
}

export default ActivityTable;
