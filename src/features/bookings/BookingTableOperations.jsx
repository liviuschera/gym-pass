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
                        value: "name-desc",
                        label: "Sort by date (sooner first)",
                    },
                    {
                        value: "bookedInDateTime-desc",
                        label: "Sort by date (sooner first)",
                    },
                    {
                        value: "bookedInDateTime-asc",
                        label: "Sort by date (later first)",
                    },
                    {
                        value: "totalPrice-desc",
                        label: "Sort by amount (high first)",
                    },
                    {
                        value: "totalPrice-asc",
                        label: "Sort by amount (low first)",
                    },
                ]}
            />
        </TableOperations>
    );
}

export default BookingTableOperations;
