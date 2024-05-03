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
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";

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
    const { checkin, isCheckingin } = useCheckin();
    const { booking, isPending } = useBooking();

    useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

    if (isPending) return <Spinner />;
    const {
        id: bookingId,
        members: { firstName, lastName },
        activities: { regularPrice, discount },
    } = booking;

    function handleCheckin() {
        if (!confirmPaid) return;
        checkin(bookingId);
    }

    return (
        <>
            <Row>
                <Heading as="h1">Check in booking #{bookingId}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />
            {regularPrice - discount > 0 && (
                <Box>
                    <Checkbox
                        checked={confirmPaid}
                        disabled={confirmPaid || isCheckingin}
                        onChange={() => setConfirmPaid(!confirmPaid)}
                        id="confirm"
                    >
                        I confirm that {firstName} {lastName} paid{" "}
                        {formatCurrency(regularPrice - discount)}
                    </Checkbox>
                </Box>
            )}
            <ButtonGroup>
                <Button
                    onClick={handleCheckin}
                    disabled={!confirmPaid || isCheckingin}
                >
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
