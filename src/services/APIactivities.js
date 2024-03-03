import supabase from "./supabase";

export async function getActivities() {
    let { data, error } = await supabase.from("activities").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching activities:");
    }

    return data;
}

export async function deleteActivity(id) {
    const { data, error } = await supabase
        .from("activities")
        .delete()
        .eq("id", id);
    if (error) {
        console.error(error);
        throw new Error("Unable to delete the activity");
    }
}
