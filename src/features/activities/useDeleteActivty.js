import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity as deleteActivityAPI } from "../../services/APIactivities";
import toast from "react-hot-toast";

export function useDeleteActivity() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteActivity } = useMutation({
        mutationFn: (id) => deleteActivityAPI(id),
        onSuccess: () => {
            toast.success("Activity deleted successfully");
            queryClient.invalidateQueries({
                queryKey: ["activities"],
            });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteActivity };
}
