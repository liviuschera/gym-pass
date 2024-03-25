import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditActivity } from "../../services/APIactivities";
import toast from "react-hot-toast";

export function useCreateActivity(dispatch) {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate: createActivity } = useMutation({
        mutationFn: (data) => createEditActivity(data),
        onSuccess: () => {
            toast.success("Activity created successfully");
            // refresh the list of activities in ActivityTable refetching the data
            queryClient.invalidateQueries({
                queryKey: ["activities"],
            });
            dispatch({ type: "reset" });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createActivity };
}
