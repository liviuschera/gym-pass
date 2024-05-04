import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: (id) => deleteBookingAPI(id),
        onSuccess: () => {
            toast.success(`Booking deleted successfully`);
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            });
            navigate(-1);
        },
        onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteBooking };
}
