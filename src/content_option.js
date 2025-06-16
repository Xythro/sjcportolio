const logotext = "SAMUEL";
const meta = {
    title: "Sam's Portfolio",
    description: "Mechatronics Engineer specializing in industrial 3D printing, automation, and R&D",
};

const introdata = {
    title: "I'm Samuel",
    animated: {
        first: "I design mechatronic systems",
        second: "I develop industrial solutions",
        third: "I innovate in 3D printing",
    },
    description: "A Mechatronics Engineer with expertise in industrial 3D printing, automation, and R&D. Currently leading thermal systems development at Foundry Lab, with a strong background in mechanical design, electronics, and software integration.",
    your_img_url: require("./assets/images/DemonSam.jpg"),
    // your_img_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
};

const dataabout = {
    title: "About Me",
    aboutme: "I'm a Mechatronics Engineer with a passion for innovative technology and complex problem-solving. At Foundry Lab, I lead the development of high-temperature ceramic materials and thermal mechanisms for industrial 3D printing systems. My expertise spans across mechanical design, thermal modeling, control systems, and process optimization. With a strong academic background and hands-on experience in various engineering domains, I bring a comprehensive approach to technical challenges.",
};

const worktimeline = [{
        jobtitle: "Mechatronics Engineer",
        where: "Foundry Lab",
        date: "2021 - Present",
    },
    {
        jobtitle: "Intern",
        where: "Fisher & Paykel Healthcare",
        date: "2020 - 2021",
    },
    {
        jobtitle: "Team Lead",
        where: "NZ Aerospace Challenge",
        date: "2019",
    },
    {
        jobtitle: "Intern",
        where: "Trimble/Loadrite",
        date: "2017-2018, 2019-2020",
    },
];

const skills = [{
        name: "CAD/Mechanical Design",
        value: 95,
    },
    {
        name: "Python/C/Matlab",
        value: 90,
    },
    {
        name: "Thermal Modeling",
        value: 85,
    },
    {
        name: "Process Development",
        value: 90,
    },
    {
        name: "Project Management",
        value: 85,
    },
    {
        name: "Technical Writing",
        value: 90,
    },
];

const services = [{
        title: "Mechanical System Design",
        description: "Expertise in designing and implementing complex mechanical systems, from concept to production, with a focus on 3D printing and automation solutions.",
    },
    {
        title: "Thermal Process Development",
        description: "Specialized in high-temperature materials and thermal mechanism development, including analytical and simulated thermal modeling.",
    },
    {
        title: "R&D Project Management",
        description: "Experience in leading research projects, coordinating resources, and managing relationships with international development partners.",
    },
];

const dataportfolio = [{
        img: require("./assets/images/Vacuumchamber_main.jpg"),
        description: "Vacuum Chamber: Revival and redesign of a 1960's Triaxial Shear Testing chamber",
        link: "/projects/vacuum-chamber",
    },
    {
        img: require("./assets/images/SiCring_main.jpg"),
        description: "Silicon Carbide Ring: Advanced material processing and manufacturing",
        link: "/projects/sic-ring",
    },
    {
        img: require("./assets/images/dragonfly_forerib.jpg"),
        description: "SEM Microscopy: High-resolution imaging and analysis",
        link: "/projects/sem-microscopy",
    },
    {
        img: require("./assets/images/Nonmagssand_titanium_map.jpg"),
        description: "Elemental Analysis: Volcanic sand composition study",
        link: "/projects/elemental-analysis",
    },
    {
        img: require("./assets/images/FBPA6_main.jpg"),
        description: "Laser Cuttable Composites: Research into advanced composite materials",
        link: "/projects/laser-composites",
    },
    {
        img: require("./assets/images/customtrucks_main.jpg"),
        description: "Custom Longboard Trucks: Precision engineering for enhanced performance",
        link: "/projects/custom-trucks",
    },
    {
        img: require("./assets/images/emag_maintemp.jpg"),
        description: "Programmable Electromagnet Array: Advanced magnetic field control system",
        link: "/projects/emag-array",
    },
];

const contactConfig = {
    YOUR_EMAIL: "samcorder23@gmail.com", // Replace with your actual email
    YOUR_FONE: "", // Add your phone if desired
    description: "Feel free to reach out for collaborations, opportunities, or to discuss innovative engineering solutions.",
    YOUR_SERVICE_ID: "service_5s0v1no",
    YOUR_TEMPLATE_ID: "template_1ar6v3s",
    YOUR_USER_ID: "9CaN9KG8AnskPK6lk",
};

const socialprofils = {

    linkedin: "https://www.linkedin.com/in/sam-corder-067aa1133/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};