import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (userData) => {
            toast.success("Logged in successfully");
            navigate("/dashboard");
        },
        onError: (error) => {
            console.log("🚀 ~ useLogin ~ error:", error.message);
            toast.error(error.message);
        },
    });

    return { login, isLoading };
}
