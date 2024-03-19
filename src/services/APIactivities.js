import supabase, { supabaseUrl } from "./supabase";

export async function getActivities() {
    let { data, error } = await supabase.from("activities").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching activities:");
    }

    return data;
}

export async function createActivity(newActivity) {
    const imageName = `${Math.random()}-${newActivity.image.name}`.replaceAll(
        "/",
        ""
    ); //remove / from image name to avoid creating new folders

    const imagePath = `${supabaseUrl}/storage/v1/object/public/activities-images/${imageName}`;
    // 1. create activity
    const { data, error } = await supabase
        .from("activities")
        .insert([{ ...newActivity, image: imagePath }]);
    if (error) {
        console.error(error);
        throw new Error(
            "Activity image could not be uploaded and the activity could not be created"
        );
    }

    // 2. upload image
    const { storageError } = await supabase.storage
        .from("activities-images")
        .upload(imageName, newActivity.image);

    // 3. delete activity if image upload fails
    if (storageError) {
        await supabase.from("activities").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error("Unable to create the activity");
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
