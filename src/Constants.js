
// Placeholder import removed

export const USERS = {
    name: "Davin Jonathan Tanus",
    titles: [
        "AI Engineer Intern @ SPIL",
        "Machine Learning Engineer",
        "Data Analyst",
        "Software Engineer"
    ],
    description: "An Information Systems student at ITS and AI Engineer Intern at PT Salam Pacific Indonesia Lines. I build practical AI, machine learning, data, and full-stack systems—from document intelligence and internal platforms to image classification, sentiment analysis, forecasting, and analytics. I care about reliable evaluation, maintainable software, and turning technical work into useful products.",
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
        description: "A private workforce-development system for structured assessments, competency profiles, learning activities, and reporting. I contribute to full-stack features, secure access flows, data workflows, analytics and report generation, automated testing, and containerized deployment. The description intentionally remains high-level and no company data or internal artifacts are published.",
        image: null,
        files: [],
        isPdf: false,
        confidential: true,
        tags: ["Next.js", "Go", "MySQL", "Analytics", "Docker"],
        ghLink: null,
        demoLink: null
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
        title: "Stock Price Forecasting — Classical ML & Deep Learning",
        eyebrow: "Time Series · Applied Research",
        category: "Time Series",
        description: "A professional time series forecasting system analyzing 10 years of historical trading data for United Tractors Tbk (UNTR.JK). Evaluates multiple architectures including Moving Average, ARIMA(5,1,0), Facebook Prophet, XGBoost, and a double-layer LSTM network. Incorporates rigorous validation methodologies: 1-step rolling Walk-Forward validation to simulate real trading, residual diagnostics (Ljung-Box Test) to mathematically reject underfitting, and learning curve monitoring to prevent overfitting. The custom-trained LSTM network achieved superior predictive accuracy with a MAPE of 1.04% and MAE of 254.56.",
        image: "/assets/portfolio/time_series/v1_forecasting_klasik.png",
        files: [
            { name: "Laporan PDF", link: "time_series/laporan_v1_forecasting_klasik.pdf", type: "pdf" }
        ],
        isPdf: false,
        metrics: [
            { value: "1.04%", label: "LSTM MAPE" },
            { value: "10 yrs", label: "UNTR.JK history" }
        ],
        tags: ["Time Series", "LSTM", "XGBoost", "ARIMA", "Prophet"],
        ghLink: null,
        demoLink: "https://colab.research.google.com/drive/1PmCxi3E9srX3Hpct5Hvo2gbp_3hQb60a?usp=sharing"
    },
    {
        title: "Stock Price Forecasting — Amazon Chronos-2 Foundation Model",
        eyebrow: "Time Series · Foundation Models",
        category: "Time Series",
        description: "An advanced implementation of Amazon's Chronos-2 Foundation Model (120M parameters) for zero-shot stock forecasting of UNTR.JK. Built and deployed a dynamic 1-step rolling Walk-Forward validation pipeline on GPU to solve zero-shot drift and flatlining. Conducted in-depth statistical checks: residual Ljung-Box test (p-value 0.915) proving zero underfitting, and a critical directional analysis—revealing the model's zero-shot limitations under domestic market micro-volatility (48.28% Directional Accuracy). Compare-tested zero-shot performance directly against custom-trained ML pipelines.",
        image: "/assets/portfolio/time_series/v2_chronos_foundation.png",
        files: [
            { name: "Laporan PDF", link: "time_series/laporan_v2_chronos_foundation.pdf", type: "pdf" }
        ],
        isPdf: false,
        metrics: [
            { value: "120M", label: "Chronos-2 parameters" },
            { value: "0.915", label: "Residual Ljung-Box p-value" }
        ],
        tags: ["Foundation Model", "Zero-Shot", "Walk-Forward", "GPU"],
        ghLink: null,
        demoLink: "https://colab.research.google.com/drive/1U83z42kPZF3e1ZWpM43Nh6pjnQ4mMeW8?usp=sharing"
    },
    {
        title: "RAG Akademik — AI Chatbot Peraturan Kampus",
        eyebrow: "Generative AI · Deployed App",
        category: "AI Applications",
        description: "An intelligent AI-powered academic assistant built with Retrieval-Augmented Generation (RAG) architecture. Leverages a vector knowledge base of 30+ indexed university regulation documents to answer student queries — covering SKS limits, thesis requirements, GPA policies, scholarships, graduation criteria, and more. Built with Python, Streamlit, sentence-transformers for semantic search, and OpenRouter LLM API, with pre-computed embeddings for efficient retrieval.",
        image: "/assets/portfolio/ragakademik/ragakademik-preview.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "30+", label: "Indexed regulation docs" },
            { value: "Live", label: "Deployed on Streamlit" }
        ],
        tags: ["RAG", "LLM", "Streamlit", "Semantic Search"],
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
        title: "AssetHub — Web Asset Management System",
        eyebrow: "Full-Stack · Deployed",
        category: "Software Engineering",
        description: "A full-featured web-based Asset Management System built with React and Supabase. Supports role-based access control (Admin, Manager, Staff), real-time asset tracking, maintenance scheduling, assignment management, audit logs, and analytics dashboard. Deployed and accessible live.",
        image: "/assets/portfolio/assethub/assethub-web.png",
        files: [],
        isPdf: false,
        metrics: [
            { value: "Live", label: "Deployed web app" }
        ],
        tags: ["React", "Supabase", "RBAC", "Analytics"],
        ghLink: "https://github.com/Daendells/asset-hub-1",
        demoLink: "https://asset-hub-1.lovable.app"
    },
    {
        title: "AssetHub — Mobile Asset Management App",
        eyebrow: "Mobile · Cross-Platform",
        category: "Software Engineering",
        description: "A cross-platform mobile application for enterprise asset management, built with React Native / Expo. Features include asset registry with search & filter, lifecycle tracking (Active, Maintenance, Borrowed), role-based access (Admin, Code Admin), and audit logs. Available on GitHub.",
        image: "/assets/portfolio/assethub/assethub-mobile.png",
        files: [],
        isPdf: false,
        tags: ["React Native", "Expo", "Mobile"],
        ghLink: "https://github.com/Daendells/Mobile_APP",
        demoLink: null
    },
    {
        title: "IT Risk Management",
        eyebrow: "Coursework · Risk Analysis",
        category: "Info Systems",
        description: "Comprehensive risk management plan identifying potential IT threats, vulnerabilities, and mitigation strategies for organizational resilience.",
        image: null,
        files: [
            { name: "Final Risk Assessment Report", link: "MRTI/MRTI_Project.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["Risk Management", "ISO 31000"]
    },
    {
        title: "Environmental Agency Data ETL",
        eyebrow: "Coursework · Data Engineering",
        category: "Data & Analytics",
        description: "Implementation of an Extract, Transform, Load (ETL) pipeline to consolidate and clean environmental data for analysis and reporting.",
        image: null,
        files: [
            { name: "ETL Process Report", link: "dlh/DLH-Davin%20Jonathan%20Tanus-5026231131-A-ETL%20(2).pdf", type: "pdf" },
            { name: "Data Analysis Doc", link: "dlh/5026231131_DLHA%20(2)%20(2).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["ETL", "Data Cleaning"]
    },
    {
        title: "Perencanaan Strategis SI/TI di TECHNOPRENEURSHIP DEVELOPMENT CENTRE (TDC) ITS",
        eyebrow: "Coursework · IT Strategy",
        category: "Info Systems",
        description: "Strategic planning for Information Systems/Technology at TDC ITS, aligning IT initiatives with business goals.",
        image: null,
        files: [
            { name: "Final Project Report", link: "psti/Kelompok%202_Final%20Project%20PSTI.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["IT Strategy", "Business Alignment"]
    },
    {
        title: "Analisis Kluster pada Faktor-Faktor Numerik Fisik dan Kimiawi yang Memengaruhi Karakteristik Kualitas Pisang",
        eyebrow: "Coursework · Unsupervised Learning",
        category: "Data & Analytics",
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
        category: "Data & Analytics",
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
        title: "Project Lead — Agile Snacklicious",
        eyebrow: "Leadership · Agile Delivery",
        category: "Info Systems",
        description: "Led end-to-end culinary business operations for Snacklicious using Agile methodology (Scrum/Kanban). Managed Sprint Planning, backlog grooming, and retrospective cycles to deliver project milestones on time. Coordinated cross-functional team collaboration and applied Agile documentation practices throughout the project lifecycle.",
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
        category: "Info Systems",
        description: "Security assessment and vulnerability analysis of web applications.",
        image: null,
        files: [
            { name: "Assessment Report", link: "pai/EAS_PAI_ClassC_Group12.pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["Web Security", "Vulnerability Analysis"]
    },
    {
        title: "Computer Vision Simulation",
        eyebrow: "Coursework · Computer Vision",
        category: "Machine Learning",
        description: "Simulation and analysis of computer vision algorithms, demonstrating object detection and recognition capabilities.",
        image: null,
        files: [
            { name: "Simulation Report", link: "tekber/Laporan%20Simulasi%20Computer%20Vision_C_131_178_216%20(1).pdf", type: "pdf" }
        ],
        isPdf: true,
        tags: ["Computer Vision", "Object Detection"]
    }
];

export const SKILLS = [
    // Data & Analytics
    { name: "SQL (MySQL, DuckDB)", type: "Data & Analytics" },
    { name: "Python", type: "Data & Analytics" },
    { name: "ETL Pipeline", type: "Data & Analytics" },
    { name: "Data Warehousing (Star Schema, SCD)", type: "Data & Analytics" },
    { name: "Time Series Forecasting", type: "Data & Analytics" },
    { name: "Data Visualization", type: "Data & Analytics" },
    { name: "K-Means Clustering & PCA", type: "Data & Analytics" },
    { name: "ARIMA / Prophet / Holt-Winters", type: "Data & Analytics" },
    // AI & Vision
    { name: "Machine Learning", type: "AI & Vision" },
    { name: "Deep Learning (LSTM, XGBoost)", type: "AI & Vision" },
    { name: "Computer Vision (OpenCV, MediaPipe)", type: "AI & Vision" },
    { name: "Face & Gesture Recognition", type: "AI & Vision" },
    { name: "RAG / LLM / Semantic Search", type: "AI & Vision" },
    // Tools & Software
    { name: "Power BI", type: "Tools & Software" },
    { name: "SAP S/4HANA", type: "Tools & Software" },
    { name: "Google Cloud Platform", type: "Tools & Software" },
    { name: "Excel", type: "Tools & Software" },
    { name: "Odoo", type: "Tools & Software" },
    { name: "Git / GitHub", type: "Tools & Software" },
    { name: "Jupyter Notebook", type: "Tools & Software" },
    { name: "Docker", type: "Tools & Software" },
    // Management & Systems
    { name: "Agile Scrum / Kanban", type: "Management & Systems" },
    { name: "Risk Management (FMEA, ISO 31000)", type: "Management & Systems" },
    { name: "IS/IT Strategic Planning", type: "Management & Systems" },
    { name: "BPMN", type: "Management & Systems" },
    // Web & Programming
    { name: "JavaScript", type: "Web & Programming" },
    { name: "HTML / CSS", type: "Web & Programming" },
    { name: "Laravel", type: "Web & Programming" },
    { name: "Streamlit", type: "Web & Programming" },
    { name: "React / Vite", type: "Web & Programming" },
];

