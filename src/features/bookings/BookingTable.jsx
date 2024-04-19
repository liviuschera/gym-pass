// import BookingRow from "./BookingRow";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { Empty, Footer, Table, TableBody, TableHeader } from "../../ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

function BookingTable() {
    const { bookings, count, isPending } = useBookings();
    const [searchParams] = useSearchParams();

    console.log(searchParams);
    if (isPending) return <Spinner />;
    if (!bookings.length) return <Empty>No bookings can be found.</Empty>;

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
                <Pagination count={count} />
            </Footer>
        </Table>
    );
}

export default BookingTable;
