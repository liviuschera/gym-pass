// import BookingRow from "./BookingRow";
import Spinner from "../../ui/Spinner";
import { Table, TableBody, TableHeader } from "../../ui/Table";
import { useBookings } from "./useBookings";

function BookingTable() {
    const { bookings, isPending } = useBookings();

    if (isPending) return <Spinner />;
    return (
        <Table>
            <TableHeader
                role="row"
                as="header"
                columns="1fr 1fr 1fr 1fr 1fr 1fr"
            >
                <div>Activity</div>
                <div>Type</div>
                <div>Dates</div>
                <div>Status</div>
                <div>Amount</div>
                <div></div>
            </TableHeader>

            <TableBody>
                {bookings.map((booking) => {
                    console.log(booking);
                })}
            </TableBody>
        </Table>
    );
}

export default BookingTable;
