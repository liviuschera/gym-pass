import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "../bookings/BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { useEffect } from "react";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;
const Box = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 2.4rem 4rem;
`;

function CheckinBooking() {
    const [confirmPaid, setConfirmPaid] = useState(false);
    const moveBack = useMoveBack();
    const { booking, isPending } = useBooking();
    console.log(booking);

    useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);
    function handleCheckin() {}

    if (isPending) return <Spinner />;
    const {
        id: bookingId,
        members: { firstName, lastName },
    } = booking;

    return (
        <>
            <Row>
                <Heading as="h1">Check in booking #{bookingId}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />
            <Box>
                <Checkbox
                    checked={confirmPaid}
                    onChange={(confirmPaid) => setConfirmPaid(!confirmPaid)}
                    id="confirm"
                >
                    I confirm that {firstName} {lastName} paid.
                </Checkbox>
            </Box>
            <ButtonGroup>
                <Button onClick={handleCheckin} disabled={!confirmPaid}>
                    Check in booking #{bookingId}
                </Button>
                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default CheckinBooking;
