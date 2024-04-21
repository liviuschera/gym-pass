import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import DisplayStatus from "./DisplayStatus";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;
function BookingDetails() {
    const moveBack = useMoveBack();
    const { booking, isPending } = useBooking();
    // const { id: bookingId, bookingStatus } = booking;
    // console.log(booking);

    if (isPending) return <Spinner />;

    return (
        <Row>
            <HeadingGroup>
                <Heading as="h1">Booking #{booking.id}</Heading>
                <DisplayStatus status={booking.bookingStatus.toLowerCase()}>
                    {booking.bookingStatus.replace("-", " ")}
                </DisplayStatus>
            </HeadingGroup>
            <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>
    );
}

export default BookingDetails;
