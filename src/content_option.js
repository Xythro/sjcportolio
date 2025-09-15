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
    description: "Hi! I'm a mechatronics engineer from New Zealand. I'm obsessed with breakthrough science technology, and thus far I've worked across additive, medical, and industrial fields. I'm currently travelling across Asia after leaving my last role (recharging, exploring and getting inspired), and I'm looking for my next daytime obsession/job.\n\nIf you're building something truly bold and impactful, I'd love to connect. My technicals are in the menu above for your reference.",
    your_img_url: require("./assets/images/DemonSam.jpg"),
    // your_img_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
};

const knowledge = [
    "Mechanical components (motion components, fasteners, materials etc)",
    "Manufacturing Processes (machining, sheet work, casting, AM etc)",
    "GD&T",
    "Static Mechanics",
    "Dynamic Mechanics",
    "Control Theory",
    "Embedded Electronics",
    "Power Electronics",
    "Sensor Instrumentation and Measurement",
    "Material Science and Chemistry (metallurgy)",
    "Thermodynamics",
    "Scientific Test Design/Theory"
];

const dataabout = {
    title: "About Me",
    aboutme: "I grew up in Auckland, in the north of New Zealand, and thanks to my dad's mechatronic career I was surrounded by engineering from an early age. This sparked a lasting curiosity for STEM — and a knack for asking fundamental questions.\n\nDespite my engineering interests English was actually my strongest subject, which nearly pulled me into the dark path of law school. Fortunately my natural inclinations prevailed, and I moved to Christchurch in the foothills of the Southern Alps to study Mechatronics Engineering (BEHons).\n\nFor the past three and a half years I've been based in Wellington, working at a deep-tech startup called Foundry Lab. This was a fantastic place to hone both technical and non-technical skills, collaborating with a brilliant team pushing the boundaries of industrial metal prototyping. I'm now looking toward my next step.\n\nI'm someone who always seeks improvement and challenge. I've worked hard to cultivate equanimity, creativity, and a methodical approach to problem-solving — qualities that guide both my technical work and how I show up in teams. Collaboration and commitment are core values for me, and I bring full focus to whatever I take on.\n\nOutside of work I'm happiest in nature — forest walks, ocean and river swims or beach walks are my favourites. I also enjoy exploring new places and meeting people from different backgrounds/perspectives, which is what motivates much of my current travel through Asia.",
};

const worktimeline = [{
        jobtitle: "Mechatronics Engineer",
        where: "Foundry Lab",
        date: "2021 - 2025",
    },
    {
        jobtitle: "Mechatronics Intern",
        where: "Fisher & Paykel Healthcare",
        date: "2020 - 2021",
    },
    {
        jobtitle: "Mechatronics Intern",
        where: "Trimble",
        date: "2019-2020",
    },
    {
        jobtitle: "Incubator Team Lead",
        where: "NZ Aerospace Challenge",
        date: "2019",
    },
    {
        jobtitle: "Mechatronics Intern",
        where: "Trimble",
        date: "2017-2018",
    },
];

const skills = [
    "Mechanical design (DFM, Motion Design, Tolerancing etc)",
    "Mechanical CAD (Inventor/Solidworks/Fusion360)",
    "Mechanical fabrication (CNC/Manual Machining/AM Prototyping/Casting/Metrology)",
    "Machine Operation and Maintenance",
    "Electrical Design (KICAD/Altium PCB Design)",
    "Electrical Assembly and Debugging",
    "Data Analysis (Python/Matlab/Excel/GSheets)",
    "PLC programming and operation (Beckhoff/Twincat)",
    "Machine Tuning and Optimisation (control loops, analysis etc",
    "AI Generative and Analysis tool application",
    "Technical/scientific communication and report writing",
    "Technical project management",
    "Scientific Research (literature reviews, staged/phased research)",
    "Experiment Design"
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
        img: require("./assets/images/dragonfly_forerib.jpg"),
        description: "SEM Microscopy - (mis)uses of an awesome tool",
        link: "/projects/sem-microscopy",
    },
    {
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
    {
        img: require("./assets/images/Nexttoyou.jpg"),
        description: "Next To You - art project with MQTT communicating smart (ESP32) park benches",
        link: "/projects/next-to-you",
    },
];

const contactConfig = {
    YOUR_EMAIL: "samcorder23@gmail.com", // Replace with your actual email
    YOUR_FONE: "+64 27 657 7040", // Add your phone if desired
    description: "Feel free to reach out for collaborations, opportunities or questions.",
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
    knowledge,
};