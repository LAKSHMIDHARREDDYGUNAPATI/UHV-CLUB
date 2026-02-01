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
        role: "UHV Co-Coordinator",
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
    {
        name: "G.LAKSHMIDHAR REDDY",
        role: "TECHNICAL COORDINATOR",
        detail: "24KB1A05J4, CSE",
        icon: "fa-code",
        image: "lakshmidhar.png",
        special: true
    },
    {
        name: "M.Manoj",
        role: "Technical Co-Coordinator",
        detail: "",
        icon: "fa-code-branch",
        image: "manoj.jpg"
    },
    {
        name: "K.Rithika Reddy",
        role: "Skill Coordinator",
        detail: "",
        icon: "fa-pencil",
        image: "rithika.jpg"
    },
    {
        name: "V.Rakshitha Reddy",
        role: "Skill Co-Coordinator",
        detail: "",
        icon: "fa-pencil-ruler",
        image: "rakshitha.jpg"
    },
    {
        name: "SK.Latheef",
        role: "Skill Co-Coordinator",
        detail: "",
        icon: "fa-user-pen",
        image: "latheef.jpg"
    },
    {
        name: "Y.Mahidhar Reddy",
        role: "Content Coordinator",
        detail: "",
        icon: "fa-file-lines",
        image: "mahidhar.png"
    },
    {
        name: "V.BRAMHANI",
        role: "Student Co-Coordinator",
        detail: "",
        icon: "fa-user-graduate",
        image: "bramhani.jpg"
    },
    {
        name: "P.CHARUHAAINI",
        role: "Student Co-Coordinator",
        detail: "",
        icon: "fa-user-graduate",
        image: "charuhaaini.jpg"
    },
    {
        name: "R.Mahesh",
        role: "Technical Co-Coordinator",
        detail: "",
        icon: "fa-code-branch",
        image: "mahesh.jpg"
    },
    {
        name: "A.Ajay Kumar",
        role: "Content Co-Coordinator",
        detail: "",
        icon: "fa-file-pen",
    },
];

// Combined list for marquee
const allTeamMembers = [...facultyCoordinators, ...studentCoordinators];
