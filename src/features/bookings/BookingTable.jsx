// import BookingRow from "./BookingRow";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { Footer, Table, TableBody, TableHeader } from "../../ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

function BookingTable() {
    const { bookings, isPending } = useBookings();

    if (isPending) return <Spinner />;
    return (
        <Table>
            <TableHeader role="row" as="header" columns="1fr 2fr 1fr 1fr 1fr">
                <div>Activity</div>
                <div>Participant</div>
                <div>Date/Time</div>
                <div>Status</div>
                <div>Amount</div>
                <div></div>
            </TableHeader>

            <TableBody>
                {bookings.map((booking) => {
                    // console.log(booking);
                    return <BookingRow key={booking.id} booking={booking} />;
                })}
            </TableBody>
            <Footer>
                <Pagination />
            </Footer>
        </Table>
    );
}

export default BookingTable;
