import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
    const { bookingId } = useParams();

    const {
        isPending,
        data: booking = {},
        error,
    } = useQuery({
        queryKey: ["booking", bookingId], // add the bookingId to the query key array to trigger the query
        queryFn: () => getBooking(bookingId), // async function that returns a promise
    });

    return { isPending, booking, error };
}
