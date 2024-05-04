import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: checkin, isPending: isCheckingin } = useMutation({
        mutationFn: (bookingId) =>
            updateBooking(bookingId, {
                bookingStatus: "checked-in",
                isPaid: true,
            }),

        onSuccess: (data) => {
            // data is received from mutationFn function
            toast.success(`Booking #${data.id} checked in successfully`);
            queryClient.invalidateQueries({ active: true }); // invalidate all queries that are currently active
            navigate("/");
        },

        onError: (error) => toast.error(`Check-in failed: ${error.message}`),
    });

    return { checkin, isCheckingin };
}
