import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditActivity } from "../../services/APIactivities";
import toast from "react-hot-toast";

export function useEditActivity() {
    const queryClient = useQueryClient();
    const { isPending: isEditing, mutate: editActivity } = useMutation({
        mutationFn: ({ newActivityData, id }) =>
            createEditActivity(newActivityData, id),
        onSuccess: () => {
            toast.success("Activity updated successfully");
            // refresh the list of activities in ActivityTable refetching the data
            queryClient.invalidateQueries({
                queryKey: ["activities"],
            });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isEditing, editActivity };
}
