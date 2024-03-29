import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../../services/APIactivities";

export function useActivity() {
    const {
        isPending,
        data: activities,
        error,
    } = useQuery({
        queryKey: ["activities"],
        queryFn: getActivities, // async function that returns a promise
    });

    return { isPending, activities, error };
}
