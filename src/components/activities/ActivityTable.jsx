import styled from "styled-components";
import { useActivity } from "./useActivity";
import Spinner from "../../ui/Spinner";
import ActivityRow from "./ActivityRow";
import { Table, TableBody, TableHeader } from "../../ui/Table";

// const Table = styled.div`
//     border: 1px solid var(--color-grey-200);
//     font-size: 1.4rem;
//     background-color: var(--color-grey-0);
//     border-radius: 7px;
//     overflow: hidden;
//     font-family: "Reddit Mono", monospace;
// `;

// const TableHeader = styled.header`
//     display: grid;
//     grid-template-columns: 0.6fr 1.8fr 2fr 1fr 1fr 1fr 1fr 1fr;
//     column-gap: 2.4rem;
//     align-items: center;

//     background-color: var(--color-grey-50);
//     border-bottom: 1px solid var(--color-grey-100);
//     text-transform: uppercase;
//     letter-spacing: 0.4px;
//     font-weight: 600;
//     color: var(--color-grey-600);
//     padding: 1.6rem 2.4rem;
// `;

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
                columns="2fr 0.7fr 2.3fr 1fr 1fr 1fr 1fr 1fr"
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
