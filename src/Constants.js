
// Placeholder import removed

export const USERS = {
    name: "Davin Jonathan Tanus",
    titles: [
        "Data Visualization Specialist",
        "Power BI Developer",
        "Data Analyst",
        "Software Engineer"
    ],
    desciption: "I am a Data Visualization Specialist designated to turning complex data into clear, actionable insights using Power BI and other analytics tools.",
    social: {
        github: "https://github.com/Daendells", // Add if known, else blank
        linkedin: "https://www.linkedin.com/in/davin-jonathan-tanus-32a19b308/", // Add if known, else blank
        instagram: "https://www.instagram.com/davin.j.t/", // Add if known, else blank
        twitter: "", // Add if known, else blank
    },
    copyrightYear: new Date().getFullYear(),
    copyrightName: "Davin Jonathan Tanus"
};

export const RELATIVE_PATH_TO_PORTO = "/assets/portfolio";

export const PROJECTS = [
    {
        title: "AssetHub — Web Asset Management System",
        description: "A full-featured web-based Asset Management System built with React and Supabase. Supports role-based access control (Admin, Manager, Staff), real-time asset tracking, maintenance scheduling, assignment management, audit logs, and analytics dashboard. Deployed and accessible live.",
        image: "/assets/portfolio/assethub/assethub-web.png",
        files: [],
        isPdf: false,
        ghLink: null,
        demoLink: "https://asset-hub-1.lovable.app"
    },
    {
        title: "AssetHub — Mobile Asset Management App",
        description: "A cross-platform mobile application for enterprise asset management, built with React Native / Expo. Features include asset registry with search & filter, lifecycle tracking (Active, Maintenance, Borrowed), QR code scanning, role-based access (Admin, Code Admin), and audit logs. Available on GitHub.",
        image: "/assets/portfolio/assethub/assethub-mobile.png",
        files: [],
        isPdf: false,
        ghLink: "https://github.com/Daendells/Mobile_APP",
        demoLink: null
    },
    {
        title: "IT Risk Management",
        description: "Comprehensive risk management plan identifying potential IT threats, vulnerabilities, and mitigation strategies for organizational resilience.",
        image: null,
        files: [
            { name: "Final Risk Assessment Report", link: "MRTI/MRTI_Project.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Environmental Agency Data ETL",
        description: "Implementation of an Extract, Transform, Load (ETL) pipeline to consolidate and clean environmental data for analysis and reporting.",
        image: null,
        files: [
            { name: "ETL Process Report", link: "dlh/DLH-Davin%20Jonathan%20Tanus-5026231131-A-ETL%20(2).pdf", type: "pdf" },
            { name: "Data Analysis Doc", link: "dlh/5026231131_DLHA%20(2)%20(2).pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Perencanaan Strategis SI/TI di TECHNOPRENEURSHIP DEVELOPMENT CENTRE (TDC) ITS",
        description: "Strategic planning for Information Systems/Technology at TDC ITS, aligning IT initiatives with business goals.",
        image: null,
        files: [
            { name: "Final Project Report", link: "psti/Kelompok%202_Final%20Project%20PSTI.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Analisis Kluster pada Faktor-Faktor Numerik yang Mempengaruhi Harapan Hidup Global",
        description: "Cluster analysis of numerical factors affecting global life expectancy using data mining techniques.",
        image: null,
        files: [
            { name: "Final Analysis Report", link: "add/Cluster_Analysis_Report.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "BCA Dashboard Project",
        description: "Interactive dashboard designed for Bank Central Asia (BCA) to visualize key performance indicators and operational metrics.",
        image: "/assets/portfolio/meoti/Screenshot 2026-01-02 172655.png",
        files: [
            { name: "Central Dashboard (ZIP)", link: "meoti/FINAL_Dashboard_Pusat_Bank%20Central%20Asia_Kelompok%205.zip", type: "archive" },
            { name: "Branch Dashboard (ZIP)", link: "meoti/FINAL_Dashboard_Cabang_Bank%20Central%20Asia_Kelompok%205.zip", type: "archive" },
            { name: "Preview Screenshot", link: "meoti/Screenshot%202026-01-02%20172655.png", type: "image" }
        ],
        isPdf: false
    },
    {
        title: "Agile Project Management",
        description: "Project management documentation utilizing Agile methodologies, including sprint planning, backlog management, and retrospective analysis.",
        image: null,
        files: [
            { name: "Final Agile Report", link: "mpt/MPT_Agile_Report.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Web Security Assessment",
        description: "Security assessment and vulnerability analysis of web applications.",
        image: null,
        files: [
            { name: "Assessment Report", link: "pai/EAS_PAI_ClassC_Group12.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Computer Vision Simulation",
        description: "Simulation and analysis of computer vision algorithms, demonstrating object detection and recognition capabilities.",
        image: null,
        files: [
            { name: "Simulation Report", link: "tekber/Laporan%20Simulasi%20Computer%20Vision_C_131_178_216%20(1).pdf", type: "pdf" }
        ],
        isPdf: true
    }
];

export const CERTIFICATES = [
    {
        title: "Software Engineer Intern",
        description: "HackerRank (2025)",
        image: null,
        files: [
            { name: "Software Engineer Intern Certificate", link: "Certificate/Software_Engineer_Intern_Certificate.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "SQL (Basic) Certificate",
        description: "HackerRank (2025)",
        image: null,
        files: [
            { name: "SQL Certificate", link: "Certificate/SQL_Basic_Certificate.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Juara 2 Pemrograman",
        description: "IS Competition, HMSI ITS (2024)",
        image: null,
        files: [
            { name: "Certificate", link: "Certificate/Certificate_3.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Introduction to SAP S/4HANA with GBI 4.2",
        description: "SAP University Alliances (2024)",
        image: null,
        files: [
            { name: "Certificate", link: "Certificate/Certificate_2.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Intro to Data Analytics",
        description: "RevoU Mini Course (2025)",
        image: null,
        files: [
            { name: "DAMC Certificate", link: "Certificate/DAMC_Certificate.pdf", type: "pdf" }
        ],
        isPdf: true
    },
    {
        title: "Resilience",
        description: "Nestlé (2026)",
        image: null,
        files: [
            { name: "Resilience Certificate", link: "Certificate/Resilience_Nestle.pdf", type: "pdf" }
        ],
        isPdf: true
    }

];

export const SKILLS = [
    { name: "Power BI", type: "Data Visualization" },
    { name: "SAP S/4HANA", type: "ERP" },
    { name: "SQL", type: "Database" },
    { name: "Python", type: "Programming" },
    { name: "Excel", type: "Data Analysis" },
    { name: "Odoo", type: "ERP" },
    { name: "BPMN", type: "Process Modeling" },
    { name: "GitHub", type: "Version Control" },
    { name: "ISO Standards", type: "Quality Assurance" },
    { name: "Agile Methodology", type: "Project Management" }
];

