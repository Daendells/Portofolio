
// Placeholder import removed

export const USERS = {
    name: "Davin Jonathan Tanus",
    email: "davinjtanus@gmail.com",
    description: "I study Information Systems at ITS and graduate in August 2027. I am an AI Engineer Intern in the Performance Excellence division of PT Salam Pacific Indonesia Lines, where I build internal tools for fleet fuel analytics, recruitment, and document checks. In my own projects I take a model from raw data to a working demo and check the numbers before I publish them. My thesis classifies bacterial and viral pneumonia in children's chest X-rays with RDNet-Tiny.",
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
        title: "Fleet fuel analytics",
        eyebrow: "Internship at SPIL · private",
        category: "Internship Work",
        description: "A dashboard the fleet team uses to see where fuel goes. It turns each vessel's daily noon reports into a voyage history and compares fuel per nautical mile and per day by route, speed, engine, and reefer load. I am the largest contributor (108 of about 240 commits): I built the analysis pages, the checks that flag missing or inconsistent reports, and the background workers. Data and code stay private.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["Laravel", "Data Analysis", "Data Quality", "Docker"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "Route plan verification",
        eyebrow: "Internship at SPIL · private",
        category: "Internship Work",
        description: "Reads the fleet's route-plan PDFs, turns them into structured records, and checks them against the voyage schedule automatically. I worked on the extraction and matching logic, the API and dashboard, sign-in, storage, and tests (Next.js, FastAPI, PostgreSQL, Docker). Details stay private.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["Document AI", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "Recruitment and assessment platform",
        eyebrow: "Internship at SPIL · private",
        category: "Internship Work",
        description: "An internal platform for assessments, competency profiles, and training plans. I rebuilt its CV analysis into two recruiter tools: one CV scored against every role, with skill gaps and interview questions, and many CVs ranked for one role. I also built the DISC assessment dashboard, connected the platform to the company SSO, and added account management to the SSO portal. Details stay private.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["LLM", "CV Analysis", "Next.js", "Go", "MySQL", "Analytics"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "BISINDO fingerspelling",
        summary: "Reads the 26-letter Indonesian Sign Language alphabet from a webcam, inside the browser.",
        eyebrow: "Computer vision · live demo",
        category: "Machine Learning",
        description: "Recognises the 26 letters of the BISINDO alphabet from a webcam, entirely in the browser. A 2.6M-parameter YOLO11n model runs through ONNX Runtime Web, and an 8-frame vote keeps typing stable. Before training I found that 63% of the public validation images were near-copies of training images, so I re-split the data by image similarity. The model was chosen on validation, scored once on a held-out test set, and tried on a signer it had never seen.",
        image: "/assets/portfolio/bisindo/bisindo-preview.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "98.5%", label: "Held-out test top-1" },
            { value: "93.6%", label: "Unseen-signer top-1" }
        ],
        tags: ["YOLO11", "Computer Vision", "ONNX Runtime Web", "PyTorch", "Data Leakage Audit"],
        ghLink: "https://github.com/Daendells/bisindo",
        demoLink: "https://daendells.github.io/bisindo/"
    },
    {
        title: "Image classification with transfer learning",
        eyebrow: "Machine learning · Dicoding course",
        category: "Machine Learning",
        description: "A MobileNetV2 model fine-tuned on 13,394 Imagenette images in 10 classes, with an 80/10/10 split, augmentation, and staged fine-tuning. It reaches 91.67% test accuracy and is exported to SavedModel, TensorFlow Lite, and TensorFlow.js.",
        image: "/assets/portfolio/machine-learning/image-classification-training.png",
        files: [
            { name: "Training Notebook (.ipynb)", link: "machine-learning/image-classification-imagenette-notebook.ipynb", type: "notebook" }
        ],
        isPdf: false,
        metrics: [
            { value: "91.67%", label: "Test accuracy" },
            { value: "13,394", label: "Images · 10 classes" }
        ],
        tags: ["TensorFlow", "MobileNetV2", "Transfer Learning", "TFLite", "TensorFlow.js"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "Indonesian review sentiment",
        summary: "Tells positive from negative Gojek reviews at 91.8% accuracy, after I found the original labels inflated the score.",
        eyebrow: "NLP · rebuilt",
        category: "Machine Learning",
        description: "Classifies 10,674 Indonesian Google Play reviews of Gojek, labelled by their star rating. Positive vs. negative reaches 91.8% accuracy on 2,009 held-out reviews, where always guessing the larger class gets 52.9%. It rebuilds a course project of mine: the original labels were partly taken from the review text, and reviews whose text and stars disagreed were dropped, which removed the hard cases. Three-star reviews still cannot be told apart (macro-F1 0.60 across three classes), and the repo says so.",
        image: "/assets/portfolio/machine-learning/sentiment-analysis-confusion-matrix.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "91.8%", label: "Positive vs. negative, macro-F1 0.918" },
            { value: "52.9%", label: "Majority-class baseline" }
        ],
        tags: ["NLP", "scikit-learn", "Evaluation", "Label Quality"],
        ghLink: "https://github.com/Daendells/indonesian-review-sentiment",
        demoLink: null
    },
    {
        title: "Stock forecasting walk-forward test",
        summary: "Tests whether ARIMA, XGBoost, or an LSTM beat 'same as today' over a year of stock prices. None did.",
        eyebrow: "Time series · rebuilt",
        category: "Data & Analytics",
        description: "Can ARIMA, XGBoost, or an LSTM predict United Tractors' next closing price better than 'same as today'? Over one year of walk-forward testing (250 trading days, each forecast made only from earlier prices), no model beat that naive forecast: 1.83% error against 1.87% for the best model, and none called the direction of the next move better than a coin flip. It replaces an earlier result of mine (1.04%) that came from comparing each forecast with the wrong day.",
        image: "/assets/portfolio/forecasting/walk-forward.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "1.83%", label: "Naive MAPE, best of all models" },
            { value: "250", label: "Walk-forward test days" }
        ],
        tags: ["Time Series", "Walk-Forward", "ARIMA", "XGBoost", "LSTM"],
        ghLink: "https://github.com/Daendells/idx-stock-forecasting",
        demoLink: null
    },
    {
        title: "RAG assistant for ITS academic rules",
        summary: "Answers questions about ITS academic rules and cites the article and page it used.",
        eyebrow: "Generative AI · live demo",
        category: "AI Applications",
        description: "Answers students' questions in Indonesian from the official ITS academic regulation (57 pages, 91 articles) and cites the article, clause, and page. Search combines keywords and embeddings, and the server checks every citation before it is shown. On a fixed set of 70 questions it ranks the right article near the top (MRR 0.84) and declines all 10 questions the regulation does not cover. It runs in about 285 MB of memory, with FastAPI, Docker, tests, and CI.",
        image: "/assets/portfolio/ragakademik/ragakademik-preview.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "0.84", label: "Retrieval MRR, 60 questions" },
            { value: "10/10", label: "Out-of-scope questions refused" }
        ],
        tags: ["RAG", "Hybrid Search", "LLM Evaluation", "FastAPI", "ONNX"],
        ghLink: "https://github.com/Daendells/RAGAkademik",
        demoLink: "https://ragakademik.streamlit.app/"
    },
    {
        title: "CI/CD pipeline on Google Cloud",
        summary: "A Laravel app containerised and deployed to Cloud Run by GitHub Actions, with tests as the gate.",
        eyebrow: "DevOps · course project",
        category: "Cloud & DevOps",
        description: "Containerised the Conduit blogging app (Laravel, MongoDB) with Docker and set up GitHub Actions to run PHPUnit tests and deploy to Google Cloud Run through Artifact Registry, with secrets kept out of the repository and Grafana for monitoring.",
        image: "/assets/portfolio/conduit/conduit-preview.png",
        files: [],
        isPdf: false,
        tags: ["Docker", "GCP", "GitHub Actions", "Laravel", "MongoDB"],
        ghLink: "https://github.com/Daendells/Conduit-CI-CD",
        demoLink: null
    },
    {
        title: "Risk management study, PT Semen Gresik",
        eyebrow: "Coursework · risk analysis",
        category: "Coursework",
        description: "An ISO 31000 study of the crusher unit at the Rembang plant, where workplace accidents were frequent. We interviewed a company contact, scored work-safety risks with FMEA, built a risk register, and proposed mitigation for the highest risks.",
        image: null,
        files: [
            { name: "Final Risk Assessment Report", link: "MRTI/MRTI_Project.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["ISO 31000", "FMEA", "Risk Register"]
    },
    {
        title: "Academic data warehouse and ETL",
        eyebrow: "Coursework · data engineering",
        category: "Coursework",
        description: "A data warehouse for two ITS academic processes, course registration and advisor approval of study plans: 5W1H process analysis, fact-table grain, dimension tables with slowly changing dimensions, and the ETL steps to clean and load the data.",
        image: null,
        files: [
            { name: "ETL Process Report", link: "dlh/DLH-Davin%20Jonathan%20Tanus-5026231131-A-ETL%20(2).pdf", type: "pdf" },
            { name: "Advisor Approval Warehouse Design", link: "dlh/5026231131_DLHA%20(2)%20(2).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["ETL", "Data Cleaning"]
    },
    {
        title: "IS/IT strategic plan, ITS Technopreneurship Development Centre",
        eyebrow: "Coursework · IT strategy",
        category: "Coursework",
        description: "A team strategic plan with a SWOT analysis, business strategy, an IT Balanced Scorecard, a McFarlan application portfolio, and an IS/IT roadmap.",
        image: null,
        files: [
            { name: "Final Project Report", link: "psti/Kelompok%202_Final%20Project%20PSTI.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["SWOT", "IT Balanced Scorecard", "McFarlan", "Roadmap"]
    },
    {
        title: "Banana quality clustering",
        eyebrow: "Coursework · unsupervised learning",
        category: "Coursework",
        description: "Clustered the Banana Quality dataset: filled missing values with KNN imputation, scaled the features, reduced them with PCA, and grouped them with K-Means, choosing the number of clusters by the elbow method and silhouette score (Python, scikit-learn).",
        image: null,
        files: [
            { name: "Final Analysis Report", link: "add/Cluster_Analysis_Report%20(1).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["K-Means", "PCA", "Scikit-Learn"]
    },
    {
        title: "BCA KPI dashboards",
        eyebrow: "Coursework · business intelligence",
        category: "Coursework",
        description: "Power BI dashboards for Bank Central Asia's head office and branches that track key performance indicators (team project).",
        image: "/assets/portfolio/meoti/Screenshot 2026-01-02 172655.png",
        files: [
            { name: "Central Dashboard (ZIP)", link: "meoti/FINAL_Dashboard_Pusat_Bank%20Central%20Asia_Kelompok%205.zip", type: "archive" },
            { name: "Branch Dashboard (ZIP)", link: "meoti/FINAL_Dashboard_Cabang_Bank%20Central%20Asia_Kelompok%205.zip", type: "archive" },
            { name: "Preview Screenshot", link: "meoti/Screenshot%202026-01-02%20172655.png", type: "image" }
        ],
        isPdf: false,
        tags: ["Dashboard", "KPI", "Analytics"]
    },
    {
        title: "Scrum Master, Snacklicious",
        eyebrow: "Coursework · agile",
        category: "Coursework",
        description: "Scrum Master for a six-person team that ran a small snack business over four sprints. I ran the daily scrums and retrospectives, split the work, and tracked income and expenses.",
        image: null,
        files: [
            { name: "Final Agile Report", link: "mpt/MPT_Agile_Report.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["Agile", "Scrum", "Leadership"]
    },
    {
        title: "Web security assessment",
        eyebrow: "Coursework · security",
        category: "Coursework",
        description: "A security review of the Iptek ITS journal site (Open Journal Systems). We fingerprinted it with Nmap and the page source, checked it against OWASP risks, and found outdated components with known critical vulnerabilities (PHP 5.3.3 at CVSS 10.0, jQuery 1.4.4), then wrote fixes.",
        image: null,
        files: [
            { name: "Assessment Report", link: "pai/EAS_PAI_ClassC_Group12.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["OWASP", "Nmap", "CVE Analysis"]
    },
    {
        title: "Computer vision simulation",
        eyebrow: "Coursework · computer vision",
        category: "Coursework",
        description: "Face detection with a Haar cascade, hand tracking with MediaPipe, and face recognition with OpenCV's LBPH, then a MobileNetV2 recognizer that identified faces more reliably than LBPH in our tests.",
        image: null,
        files: [
            { name: "Simulation Report", link: "tekber/Laporan%20Simulasi%20Computer%20Vision_C_131_178_216%20(1).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["OpenCV", "MediaPipe", "MobileNetV2"]
    }
];
