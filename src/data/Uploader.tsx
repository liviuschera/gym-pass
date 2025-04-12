import { useState } from "react";
import supabase from "../services/supabase";
import Button from "../ui/Button";

import { bookings } from "./data-bookings";
import { activities } from "./data-activities";
import { members } from "./data-members";
import { Activity, Booking, Member } from "../types";

async function deleteMembers(): Promise<void> {
    const { error } = await supabase.from("members").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteActivities(): Promise<void> {
    const { error } = await supabase.from("activities").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteBookings(): Promise<void> {
    const { error } = await supabase.from("bookings").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function createMembers(): Promise<void> {
    const { error } = await supabase.from("members").insert(members);
    if (error) console.log(error.message);
}

async function createActivities(): Promise<void> {
    const { error } = await supabase.from("activities").insert(activities);
    if (error) console.log(error.message);
}

interface MemberIdResponse {
    id: number;
}

interface ActivityIdResponse {
    id: number;
}

async function createBookings(): Promise<void> {
    // Bookings need a memberId and a activityId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all memberIds and activityIds, and then replace the original IDs in the booking data with the actual ones from the DB
    const { data: membersIds } = await supabase
        .from("members")
        .select("id")
        .order("id");
    
    const allMemberIds = (membersIds as MemberIdResponse[]).map((member) => member.id);
    
    const { data: activitiesIds } = await supabase
        .from("activities")
        .select("id")
        .order("id");
    
    const allActivityIds = (activitiesIds as ActivityIdResponse[]).map((activity) => activity.id);

    const finalBookings = bookings.map((booking) => {
        const bookingStatus =
            Math.random() > 0.5 ? "unconfirmed" : "checked-in";

        const isPaid = Math.random() > 0.5;

        return {
            ...booking,
            bookingStatus,
            isPaid,
            memberId: allMemberIds.at(booking.memberId - 1),
            activityId: allActivityIds.at(booking.activityId - 1),
        };
    });
    console.log("🚀 ~ finalBookings ~ finalBookings:", finalBookings);

    const { error } = await supabase.from("bookings").insert(finalBookings);
    if (error) console.log(error.message);
}

function Uploader(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function uploadAll(): Promise<void> {
        setIsLoading(true);
        // Bookings need to be deleted FIRST
        await deleteBookings();
        await deleteMembers();
        await deleteActivities();

        // Bookings need to be created LAST
        await createMembers();
        await createActivities();
        await createBookings();

        setIsLoading(false);
    }

    async function uploadBookings(): Promise<void> {
        setIsLoading(true);
        await deleteBookings();
        await createBookings();
        setIsLoading(false);
    }

    return (
        <div
            style={{
                marginTop: "auto",
                backgroundColor: "#d1fae5",
                padding: "8px",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
            }}
        >
            <h3>SAMPLE DATA</h3>

            <Button onClick={uploadAll} disabled={isLoading}>
                Upload ALL
            </Button>

            <Button onClick={uploadBookings} disabled={isLoading}>
                Upload bookings ONLY
            </Button>
        </div>
    );
}

export default Uploader;
