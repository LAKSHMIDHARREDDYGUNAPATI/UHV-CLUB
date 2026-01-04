// Shared Team Data - Edit this file to update both Team Page and Home Page Marquee

const facultyCoordinators = [
    {
        name: "Dr. V. Vijay Kumar Reddy",
        role: "Chairperson",
        detail: "Director, NBKRIST",
        icon: "fa-user-tie",
        image: "director.jpg"
    },
    {
        name: "Dr. M. Srinivasulu",
        role: "Convener",
        detail: "Dept. of Mechanical",
        icon: "fa-chalkboard-user",
        image: "srinivasulu.jpg"
    },
    {
        name: "Mrs. B. Raghavamma",
        role: "UHV Coordinator",
        detail: "Dept. of S&H",
        icon: "fa-user-gear",
        image: "raghavamma.jpg"
    },
    {
        name: "Mr. K. Narendra",
        role: "Co-Coordinator",
        detail: "Dept. of S&H",
        icon: "fa-user",
        image: "narendra.jpg"
    },
];

const studentCoordinators = [
    {
        name: "T. Varunemdhar Reddy",
        role: "Student Coordinator",
        detail: "",
        icon: "fa-graduation-cap",
        image: "varun.jpg"
    },
];

// Combined list for marquee
const allTeamMembers = [...facultyCoordinators, ...studentCoordinators];
