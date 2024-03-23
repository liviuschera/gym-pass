import supabase, { supabaseUrl } from "./supabase";

export async function getActivities() {
    let { data, error } = await supabase.from("activities").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching activities:");
    }

    return data;
}

export async function createEditActivity(newActivity, id) {
    // console.log("newActivity:=>>>>>>> ", newActivity);

    const imageName = `${Math.random()}-${newActivity.image.name}`.replaceAll(
        "/",
        ""
    ); //remove / from image name to avoid creating new folders

    // checking if  user is uploading a new image or the image is already uploaded
    const hasImagePath = newActivity?.image?.startsWith?.(supabaseUrl);
    const imagePath = hasImagePath
        ? newActivity.image
        : `${supabaseUrl}/storage/v1/object/public/activities-images/${imageName}`;

    // 1. CREATE/EDIT activity
    let query = supabase.from("activities");

    // CREATE activity
    if (!id) {
        query = query
            .insert([{ ...newActivity, image: imagePath }])
            .select()
            .single();
    }

    // EDIT activity
    if (id) {
        query = query
            .update([{ ...newActivity, image: imagePath }])
            .eq("id", id)
            .select()
            .single();
    }

    const { data, error } = await query.select().single();
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
