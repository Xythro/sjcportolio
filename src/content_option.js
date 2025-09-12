const logotext = "SAMUEL";
const meta = {
    title: "Sam's Portfolio",
    description: "Mechatronics Engineer specializing in industrial 3D printing, automation, and R&D",
};

const introdata = {
    title: "I'm Samuel",
    animated: {
        first: "I research",
        second: "I design",
        third: "I test",
        fourth: "I repeat",
        fifth: "I repeat",
        sixth: "I repeat",
    },
    description: "Hi! I’m a mechatronics engineer from New Zealand. I’m obsessed with breakthrough science technology, and thus far I’ve worked across additive, medical, and industrial fields. I’m currently travelling across Asia after leaving my last role (recharging, exploring and getting inspired), and I’m looking for my next daytime obsession/job. If you’re building something truly bold and impactful, I’d love to connect. My technicals are in the menu above for your reference.",
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
        date: "2021 - 2025",
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
        description: "Silicon Carbide Ring - adventures in diamond grinding with custom tooling",
        link: "/projects/sic-ring",
    },
    {
        img: require("./assets/images/dragonfly_forerib.jpg"),
        description: "SEM Microscopy - (mis)uses of an awesome tool",
        link: "/projects/sem-microscopy",
    },
    {
        img: require("./assets/images/Nonmagssand_titanium_map.jpg"),
        description: "Elemental Analysis: Volcanic sand composition study",
        link: "/projects/elemental-analysis",
    },
    {
        img: require("./assets/images/FBPA6_main.jpg"),
        description: " Laser Cuttable Composite Experiments - molding, cutting and tensile testing",
        link: "/projects/laser-composites",
    },
    {
        img: require("./assets/images/customtrucks_main.jpg"),
        description: "Custom Longboard Trucks - CNC 6061, designed for high angle turns",
        link: "/projects/custom-trucks",
    },
    {
        img: require("./assets/images/emag_main.JPG"),
        description: "Liquid Cooled Electromagnet Array - designed to fit as vacuum chamber manifold",
        link: "/projects/emag-array",
    },
    {
        img: require("./assets/images/Generic_controller.jpg"),
        description: "Generic ESP32 multiplexed PWM driver",
        link: "/projects/esp32-multiplexed-pwm-driver",
    },
    {
        img: require("./assets/images/SaltCast_spin.gif"),
        description: "Porous Aluminium Sculpture using salt infiltration casting",
        link: "/projects/porous-aluminium-sculpture",
    },
    {
        img: require("./assets/images/Esk8_horizontal.jpg"),
        description: "Custom ESK8 with scratchbuilt trucks, deck, battery and enclosure",
        link: "/projects/custom-esk8",
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