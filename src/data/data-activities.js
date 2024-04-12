import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/activities-images/`;

export const activities = [
    {
        name: "BODYPUMP",
        maxCapacity: 55,
        regularPrice: 0,
        discount: 0,
        type: "Class",
        image: imageUrl + "bodypump.jpg",
        description:
            "Using light to moderate weights with lots of repetition, BODYPUMP gives you a total body workout. It will burn up to 540 calories**. Instructors will coach you through the scientifically-backed moves and techniques pumping out encouragement, motivation and great music – helping you achieve much more than on your own! You’ll leave the class feeling challenged and motivated, ready to come back for more. BODYPUMP is available as either a 55, 45 or 30-minute workout.",
    },
    {
        name: "RPM",
        maxCapacity: 40,
        regularPrice: 0,
        discount: 0,
        type: "Class",
        image: imageUrl + "rpm.jpg",
        description:
            "RPM™ is a group indoor cycling workout where you control the intensity. It’s fun, low impact and you can burn up to 500 calories a session**.",
    },
    {
        name: "BODYCOMBAT",
        maxCapacity: 60,
        regularPrice: 0,
        discount: 0,
        type: "Class",
        image: imageUrl + "cabin-003.jpg",
        description:
            "Step into a BODYCOMBAT workout and you’ll punch and kick your way to fitness, burning up to 740 calories** along the way. This high-energy martial-arts inspired workout is totally non-contact and there are no complex moves to master. A LES MILLS™ instructor will challenge you to up the intensity and motivate you to make the most of every round. You'll release stress, have a blast and feel like a champ.",
    },
    {
        name: "Yoga",
        maxCapacity: 60,
        regularPrice: 10,
        discount: 3,
        type: "Class",
        image: imageUrl + "yoga.jpg",
        description:
            "Dive into the transformative world of yoga and elevate your well-being with our classes! Experience the physical benefits of improved strength, flexibility, and posture, while finding mental clarity and reducing stress through mindfulness practices. Embrace emotional balance and holistic healing as you cultivate inner peace and connect with a supportive community of fellow yogis. Join us on the mat and start your journey towards a healthier, happier you today!",
    },
    {
        name: "Swimming",
        maxCapacity: 30,
        regularPrice: 15,
        discount: 5,
        type: "Swimming",
        image: imageUrl + "swimming.jpg",
        description:
            "Dive into relaxation and refreshment with our swimming sessions tailored for pleasure seekers like you! Feel the stress of the day melt away as you glide through crystal-clear waters. Whether you're seeking a peaceful escape or a fun-filled aquatic adventure, our pool offers the perfect oasis. Join us for a dip and discover the joy of swimming for pure enjoyment. Your ultimate relaxation awaits!",
    },
    {
        name: "Pilates",
        maxCapacity: 6,
        regularPrice: 9,
        discount: 0,
        type: "Class",
        image: imageUrl + "pilates.jpg",
        description:
            "ilates offers a comprehensive approach to fitness, focusing on strengthening the core, improving flexibility, and enhancing overall body alignment. With its adaptable exercises suitable for individuals of all fitness levels, Pilates fosters better posture, balance, and mind-body connection. Whether practiced on a mat or with specialized equipment, Pilates promotes holistic wellness, aiding in injury prevention and rehabilitation while cultivating a sense of relaxation and vitality.",
    },
    {
        name: "Tennis",
        maxCapacity: 8,
        regularPrice: 30,
        discount: 7,
        type: "Tennis",
        image: imageUrl + "tennis.jpg",
        description:
            "Tennis is a dynamic and exhilarating sport that offers numerous physical and mental benefits. Whether played competitively or recreationally, tennis provides a full-body workout that enhances cardiovascular health, strength, agility, and coordination. Its social nature fosters camaraderie and friendships while sharpening strategic thinking and problem-solving skills on the court. With its accessibility to players of all ages and skill levels, tennis is a timeless sport that promotes physical fitness, mental acuity, and a lifelong love for staying active.",
    },
    {
        name: "Zumba",
        maxCapacity: 10,
        regularPrice: 5,
        discount: 0,
        type: "Dance",
        image: imageUrl + "Zumba.jpg",
        description:
            "Zumba is an electrifying and infectious dance workout that makes fitness fun and accessible for everyone. With its blend of high-energy Latin rhythms and easy-to-follow choreography, Zumba transforms exercise into a joyful celebration. Suitable for all ages and fitness levels, Zumba not only burns calories and tones muscles but also uplifts spirits and boosts confidence. Joining a Zumba class is not just a workout; it's a vibrant community experience that leaves participants feeling energized, refreshed, and ready to conquer the dance floor of life.",
    },
];
