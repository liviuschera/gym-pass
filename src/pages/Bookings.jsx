import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
    return (
        <>
            <Row>
                <Heading>All bookings</Heading>
                <BookingTableOperations />
            </Row>
            <BookingTable />
        </>
    );
}

export default Bookings;
