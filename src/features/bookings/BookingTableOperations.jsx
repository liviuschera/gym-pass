import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
    return (
        <TableOperations>
            <Filter
                filterField="status"
                options={[
                    { value: "all", label: "All" },
                    { value: "checked-in", label: "Checked in" },
                    { value: "unconfirmed", label: "Unconfirmed" },
                    { value: "paid", label: "Paid" },
                    { value: "unpaid", label: "Unpaid" },
                ]}
            />

            <SortBy
                options={[
                    {
                        value: "name-asc",
                        label: "Sort by activity name (ascending)",
                    },
                    {
                        value: "name-desc",
                        label: "Sort by activity name (descending)",
                    },
                    {
                        value: "lastName-asc",
                        label: "Sort by participant name (ascending)",
                    },
                    {
                        value: "lastName-desc",
                        label: "Sort by participant name (descending)",
                    },
                    {
                        value: "bookedInDateTime-asc",
                        label: "Sort by date (sooner first)",
                    },
                    {
                        value: "bookedInDateTime-desc",
                        label: "Sort by date (later first)",
                    },
                    {
                        value: "regularPrice-asc",
                        label: "Sort by regular price (low first)",
                    },
                    {
                        value: "regularPrice-desc",
                        label: "Sort by regular price (high first)",
                    },
                ]}
            />
        </TableOperations>
    );
}

export default BookingTableOperations;
