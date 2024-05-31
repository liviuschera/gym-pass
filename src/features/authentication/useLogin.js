import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (userData) => {
            queryClient.setQueryData(["user"], userData.user);
            navigate("/", { replace: true });
            // toast.success("Logged in successfully");
        },
        onError: (error) => {
            console.log("🚀 ~ useLogin ~ error:", error.message);
            toast.error(error.message);
        },
    });

    return { login, isPending };
}
