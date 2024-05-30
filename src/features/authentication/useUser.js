import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
    const { data: user, isPending } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    console.log("🚀 ~ file: useUser.js:useUser ~ user", user);

    return { user, isPending, isAuthenticated: user?.role === "authenticated" };
}
