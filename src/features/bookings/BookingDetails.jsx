import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import DisplayStatus from "./DisplayStatus";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;
function BookingDetails() {
    const moveBack = useMoveBack();
    const { booking, isPending } = useBooking();
    const { id: bookingId, bookingStatus } = booking;

    if (isPending) return <Spinner />;

    return (
        <Row>
            <HeadingGroup>
                <Heading as="h1">Booking #{bookingId}</Heading>
                <DisplayStatus type={bookingStatus}>
                    {bookingStatus.replace("-", " ")}
                </DisplayStatus>
            </HeadingGroup>
            <Button onClick={moveBack}>&larr; Back</Button>
        </Row>
    );
}

export default BookingDetails;
