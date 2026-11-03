
// Placeholder import removed

export const USERS = {
    name: "Davin Jonathan Tanus",
    email: "davinjtanus@gmail.com",
    description: "I am an Information Systems student at ITS, expected to graduate in August 2027, and an AI Engineer Intern in the Performance Excellence division of PT Salam Pacific Indonesia Lines. At work I build internal tools for recruitment, assessment analytics, and document processing. In my own projects I take machine-learning work from raw data and careful evaluation to a working demo, such as Indonesian sign-language recognition that runs entirely in the browser. My undergraduate thesis classifies bacterial and viral pneumonia in children's chest X-rays with the RDNet-Tiny architecture.",
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
        title: "Intelligent Document Verification Platform",
        eyebrow: "AI Engineering Internship · Confidential",
        category: "Internship Work",
        description: "An internal platform that transforms operational PDF documents into structured, searchable information and supports automated verification against scheduling records. My work covers document extraction, normalization and matching logic, dashboard and API integration, authentication, database persistence, testing, and containerized delivery. Implementation details, data, and source code are withheld to protect company confidentiality.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["Document AI", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "Talent Development & Assessment Platform",
        eyebrow: "AI Engineering Internship · Confidential",
        category: "Internship Work",
        description: "A private workforce-development and recruitment system for structured assessments, competency profiles, learning activities, and reporting. I rebuilt its LLM-based CV analysis module into two recruiter workflows: matching one CV against all roles (fit score, best-fit role, strengths, skill gaps, and on-demand interview questions) and ranking many CVs for a single role. I also built a DISC psychometric assessment analytics dashboard with CSV upload, deduplication, a role-fit matrix, and candidate comparison, and contribute to secure access flows, training plans, recruitment reports, automated testing, and containerized deployment. The description intentionally remains high-level and no company data or internal artifacts are published.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["LLM", "CV Analysis", "Next.js", "Go", "MySQL", "Analytics"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "BISINDO Fingerspelling — In-Browser Sign Language Recognition",
        summary: "Recognises the 26-letter Indonesian Sign Language alphabet from a webcam, entirely in the browser; found and fixed data leakage first.",
        eyebrow: "Computer Vision · Live Web Demo",
        category: "Machine Learning",
        description: "A real-time recognizer for the 26 letters of the Indonesian Sign Language (BISINDO) alphabet that runs entirely in the browser: a 2.6M-parameter YOLO11n detector exported to ONNX and executed client-side with ONNX Runtime Web, with an 8-frame vote for stable live typing. An audit found that 63% of the public dataset's validation images were near-copies of training images, so the data was re-split by perceptual-hash groups. The model was chosen on validation, scored once on a held-out test set, and tested on an unseen signer against YOLOv8n, landmark-SVM, and DINOv2-SVM baselines.",
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
        title: "Multi-Class Image Classification with Transfer Learning",
        eyebrow: "Machine Learning · Dicoding",
        category: "Machine Learning",
        description: "A reproducible image-classification pipeline trained on 13,394 Imagenette images across 10 classes. The project uses an 80/10/10 train-validation-test split, realistic augmentation, a MobileNetV2 transfer-learning backbone, staged fine-tuning, and callback-driven checkpointing. Evaluation includes learning curves, a confusion matrix, and per-class metrics, with 91.67% test accuracy. The trained model was exported to SavedModel, TensorFlow Lite, and TensorFlow.js formats.",
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
        title: "Indonesian App Review Sentiment Analysis",
        summary: "Three-class sentiment model on 16,000+ self-collected Indonesian app reviews, comparing classical models with a BiLSTM.",
        eyebrow: "Natural Language Processing · Dicoding",
        category: "Machine Learning",
        description: "An end-to-end three-class sentiment-analysis project built from more than 16,000 independently collected Indonesian app reviews. The pipeline handles text cleaning, slang normalization, sentiment-aware preprocessing, deduplication, class balancing, feature extraction, and repeatable inference. Three approaches—LinearSVC, logistic regression, and a PyTorch BiLSTM—were compared; the strongest evaluated model achieved 92.17% test accuracy, supported by per-class reporting and confusion-matrix analysis.",
        image: "/assets/portfolio/machine-learning/sentiment-analysis-confusion-matrix.png",
        files: [
            { name: "Training Notebook (.ipynb)", link: "machine-learning/sentiment-analysis-gojek-training.ipynb", type: "notebook" }
        ],
        isPdf: false,
        metrics: [
            { value: "92.17%", label: "Test accuracy" },
            { value: "16,000+", label: "Independently scraped reviews" }
        ],
        tags: ["NLP", "Scikit-Learn", "PyTorch", "BiLSTM", "Text Classification"],
        ghLink: null,
        demoLink: null
    },
    {
        title: "RAG Academic Assistant — Cited Answers from the ITS Academic Regulation",
        summary: "Answers questions from the official 57-page ITS academic regulation and cites the exact article and page; evaluated on 70 questions.",
        eyebrow: "Generative AI · Deployed App · Evaluated",
        category: "AI Applications",
        description: "Answers students' questions in Indonesian from the official text of Peraturan Rektor ITS No. 33/2025 (57 pages, 91 articles) and cites the exact Pasal, ayat, and page for every answer. The OCR'd PDF is split into one chunk per article, retrieved with BM25 and multilingual-e5 embeddings fused by reciprocal rank fusion, and answered by a free LLM whose citations the server checks before showing them. Measured on a frozen set of 70 questions: retrieval MRR 0.84 (keywords alone 0.80), and all 10 questions outside the regulation are refused instead of guessed. Runs without PyTorch (quantised ONNX, about 285 MB of RAM), with FastAPI, a plain HTML/JS page, Docker, pytest, and CI that fails if retrieval quality drops.",
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
        title: "Conduit — Full CI/CD Pipeline on GCP",
        eyebrow: "DevOps · Cloud Deployment",
        category: "Cloud & DevOps",
        description: "End-to-end DevOps implementation of the Conduit blogging platform (Laravel/PHP) with a production-grade CI/CD pipeline. Built and containerized with Docker, automated via GitHub Actions with secrets management, and deployed to Google Cloud Run through Artifact Registry. Backend powered by MongoDB, quality-gated with PHPUnit test suites, and internally monitored with Grafana dashboards. Demonstrates real-world DevOps competencies: containerization, cloud deployment, automated testing, secret handling, and observability.",
        image: "/assets/portfolio/conduit/conduit-preview.png",
        files: [],
        isPdf: false,
        tags: ["Docker", "GCP", "GitHub Actions", "Laravel", "MongoDB"],
        ghLink: "https://github.com/Daendells/Conduit-CI-CD",
        demoLink: null
    },
    {
        title: "Risk Management Study — PT Semen Gresik Crusher Unit",
        eyebrow: "Coursework · Risk Analysis",
        category: "Coursework",
        description: "An ISO 31000 risk management study of the crusher unit at PT Semen Gresik's Rembang plant, an area with frequent workplace accidents. The team interviewed a company contact, identified and scored work-safety risks with FMEA, built a risk register, and proposed mitigation for the highest-priority risks.",
        image: null,
        files: [
            { name: "Final Risk Assessment Report", link: "MRTI/MRTI_Project.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["ISO 31000", "FMEA", "Risk Register"]
    },
    {
        title: "Academic Data Warehouse & ETL Design",
        eyebrow: "Coursework · Data Engineering",
        category: "Coursework",
        description: "Data warehouse design for ITS academic processes (course registration and advisor approval of study plans): 5W1H business-process analysis, fact-table granularity, dimension tables with slowly changing dimensions, and documented ETL steps to clean and load the data.",
        image: null,
        files: [
            { name: "ETL Process Report", link: "dlh/DLH-Davin%20Jonathan%20Tanus-5026231131-A-ETL%20(2).pdf", type: "pdf" },
            { name: "Advisor Approval Warehouse Design", link: "dlh/5026231131_DLHA%20(2)%20(2).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["ETL", "Data Cleaning"]
    },
    {
        title: "IS/IT Strategic Planning — ITS Technopreneurship Development Centre",
        eyebrow: "Coursework · IT Strategy",
        category: "Coursework",
        description: "A team strategic plan for ITS Technopreneurship Development Centre: SWOT analysis of the internal and external environment, business strategy, an IT Balanced Scorecard, a McFarlan application portfolio, and an IS/IT development roadmap.",
        image: null,
        files: [
            { name: "Final Project Report", link: "psti/Kelompok%202_Final%20Project%20PSTI.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["SWOT", "IT Balanced Scorecard", "McFarlan", "Roadmap"]
    },
    {
        title: "Banana Quality Cluster Analysis (K-Means & PCA)",
        eyebrow: "Coursework · Unsupervised Learning",
        category: "Coursework",
        description: "A data science project applying unsupervised machine learning to the Banana Quality Dataset to uncover hidden patterns in physical and chemical numerical features. Implemented KNNImputer to handle missing values and preserve data integrity, followed by MinMaxScaler for feature standardization. Applied Principal Component Analysis (PCA) to reduce dimensionality and simplify feature complexity without significant variance loss. Executed K-Means Clustering optimized via the Elbow Method and Silhouette Coefficient, then validated segmentation consistency using V-Measure Score. Built with Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn).",
        image: null,
        files: [
            { name: "Final Analysis Report", link: "add/Cluster_Analysis_Report%20(1).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["K-Means", "PCA", "Scikit-Learn"]
    },
    {
        title: "BCA Dashboard Project",
        eyebrow: "Coursework · Business Intelligence",
        category: "Coursework",
        description: "Interactive dashboard designed for Bank Central Asia (BCA) to visualize key performance indicators and operational metrics.",
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
        title: "Scrum Master — Agile Snacklicious",
        eyebrow: "Leadership · Agile Delivery",
        category: "Coursework",
        description: "Scrum Master and coordinator for a six-person team running the Snacklicious snack business over four Scrum sprints. Led sprint execution, daily scrums, and retrospectives, divided tasks across the team, and tracked income and expenses for the project budget and cash flow.",
        image: null,
        files: [
            { name: "Final Agile Report", link: "mpt/MPT_Agile_Report.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["Agile", "Scrum", "Leadership"]
    },
    {
        title: "Web Security Assessment",
        eyebrow: "Coursework · Security",
        category: "Coursework",
        description: "A security assessment of the Iptek ITS journal website (Open Journal Systems). The team fingerprinted the platform and its libraries with Nmap and manual source inspection, reviewed it against OWASP risks such as broken access control, XSS, SQL injection, and journal-hijacking SEO spam, and found outdated components with published critical vulnerabilities (PHP 5.3.3 at CVSS 10.0, jQuery 1.4.4 with known XSS issues), followed by remediation recommendations.",
        image: null,
        files: [
            { name: "Assessment Report", link: "pai/EAS_PAI_ClassC_Group12.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["OWASP", "Nmap", "CVE Analysis"]
    },
    {
        title: "Computer Vision Simulation",
        eyebrow: "Coursework · Computer Vision",
        category: "Coursework",
        description: "Face detection with a Haar cascade, hand-landmark tracking with MediaPipe, and face recognition with OpenCV's LBPH recognizer, then an improved recognizer based on MobileNetV2 that identified faces more accurately and consistently than LBPH in the team's tests.",
        image: null,
        files: [
            { name: "Simulation Report", link: "tekber/Laporan%20Simulasi%20Computer%20Vision_C_131_178_216%20(1).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["OpenCV", "MediaPipe", "MobileNetV2"]
    }
];
