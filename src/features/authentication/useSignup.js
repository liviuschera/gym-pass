import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log("🚀 ~ signup ~ user:", user);
            toast.success("User created successfully! Please login.");
        },
    });
    return { signup, isLoading };
}
