import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: () => logoutApi(),
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", { replace: true });
        },
        onError: (error) => {
            console.log("🚀 ~ useLogout ~ error:", error.message);
            toast.error(error.message);
        },
    });

    return { logout, isPending };
}
