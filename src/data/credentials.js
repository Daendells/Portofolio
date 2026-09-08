const certificatePath = "/assets/credentials/certificates";
const activityPath = "/assets/credentials/activities";

const documentLink = (basePath, fileName, name = "View credential") => ({
  name,
  link: `${basePath}/${fileName}`,
});

export const CERTIFICATES = [
  {
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    issued: "September 2026",
    description:
      "Advanced deep-learning coursework covering computer vision, natural language processing, model evaluation, and deployment workflows.",
    skills: ["Deep Learning", "Computer Vision", "NLP"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-deep-learning-fundamentals.pdf"
      ),
    ],
  },
  {
    title: "AWS AI Academy — Basic & Beginner",
    issuer: "Dicoding × AWS Training and Certification",
    issued: "August 2026",
    description:
      "Completed the introductory AWS AI Academy program, building a foundation in artificial intelligence and cloud-based AI concepts.",
    skills: ["Artificial Intelligence", "AWS", "Cloud"],
    files: [
      documentLink(
        certificatePath,
        "aws-ai-academy-basic-beginner.png"
      ),
    ],
  },
  {
    title: "Introduction to LangSmith Deployment",
    issuer: "LangChain Academy",
    issued: "August 2026",
    description:
      "Foundation course on deploying, tracing, and operating LLM applications with LangSmith-oriented workflows.",
    skills: ["LangSmith", "LLM Operations", "Deployment"],
    files: [
      documentLink(
        certificatePath,
        "langchain-introduction-to-langsmith-deployment.pdf"
      ),
    ],
  },
  {
    title: "Introduction to LangGraph — Python",
    issuer: "LangChain Academy",
    issued: "August 2026",
    description:
      "Foundation course on building stateful, graph-based agent workflows in Python with LangGraph.",
    skills: ["LangGraph", "AI Agents", "Python"],
    files: [
      documentLink(
        certificatePath,
        "langchain-introduction-to-langgraph-python.pdf"
      ),
    ],
  },
  {
    title: "Introduction to LangChain — Python",
    issuer: "LangChain Academy",
    issued: "August 2026",
    description:
      "Foundation course on composing LLM-powered applications, prompts, models, and tools with LangChain in Python.",
    skills: ["LangChain", "Generative AI", "Python"],
    files: [
      documentLink(
        certificatePath,
        "langchain-introduction-to-langchain-python.pdf"
      ),
    ],
  },
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    issued: "August 2026",
    description:
      "Applied generative-AI solution planning, model selection, deployment, and responsible-AI practices with Microsoft Azure tooling.",
    skills: ["Generative AI", "Microsoft Azure", "Responsible AI"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-generative-ai-with-microsoft-azure.pdf"
      ),
    ],
  },
  {
    title: "Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    issued: "August 2026",
    description:
      "End-to-end data science with Microsoft Fabric, from exploration and experiments to model deployment and monitoring.",
    skills: ["Data Science", "Microsoft Fabric", "MLOps"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-data-science-with-microsoft-fabric.pdf"
      ),
    ],
  },
  {
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    issued: "July 2026",
    description:
      "Prompt patterns, evaluation practices, and responsible use of generative AI across software-development workflows.",
    skills: ["Prompt Engineering", "Generative AI", "Software Development"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-prompt-engineering-for-software-developers.pdf"
      ),
    ],
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issued: "July 2026",
    description:
      "Core artificial-intelligence concepts, data foundations, machine learning, deep learning, and practical applications.",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    files: [
      documentLink(certificatePath, "dicoding-ai-basics.pdf"),
    ],
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia × DBS Foundation",
    issued: "July 2026",
    description:
      "Financial planning, responsible borrowing, investing fundamentals, and practical long-term money management.",
    skills: ["Financial Literacy", "Planning", "Decision Making"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-introduction-to-financial-literacy.pdf"
      ),
    ],
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    issued: "July 2026",
    description:
      "Practical machine-learning workflow for tabular data, including classification, regression, clustering, and evaluation.",
    skills: ["Machine Learning", "Scikit-Learn", "Model Evaluation"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-machine-learning-for-beginners.pdf"
      ),
    ],
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    issued: "July 2026",
    description:
      "Introduces agentic coding workflows with Claude Code for understanding, changing, and validating software projects.",
    skills: ["Claude Code", "AI-Assisted Development", "Developer Tools"],
    files: [
      documentLink(certificatePath, "anthropic-claude-code-101.pdf"),
    ],
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    issued: "July 2026",
    description:
      "Foundational course on working effectively with Claude and applying generative AI to structured tasks.",
    skills: ["Claude", "Generative AI", "AI Collaboration"],
    files: [documentLink(certificatePath, "anthropic-claude-101.pdf")],
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    issued: "July 2026",
    description:
      "Industry-aligned Python fundamentals covering data types, expressions, control flow, collections, functions, and development tools.",
    skills: ["Python", "Programming Fundamentals", "Problem Solving"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-python-programming-basics.pdf"
      ),
    ],
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia × AWS",
    issued: "July 2026",
    description:
      "AWS cloud fundamentals, global infrastructure, core services, security, pricing, and introductory generative-AI concepts.",
    skills: ["AWS", "Cloud Computing", "Generative AI"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-aws-cloud-and-generative-ai-basics.pdf"
      ),
    ],
  },
  {
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    issued: "July 2026",
    description:
      "A structured AI-assisted development workflow spanning requirements, technical design, implementation tasks, and documentation.",
    skills: ["Spec-Driven Development", "Kiro", "Software Engineering"],
    files: [
      documentLink(
        certificatePath,
        "dicoding-spec-driven-development-with-kiro.pdf"
      ),
    ],
  },
  {
    title: "DevNet Associate",
    issuer: "Cisco Networking Academy × ITS",
    issued: "July 2026",
    description:
      "Developer-focused networking credential covering Python and Linux foundations, APIs, application security, automation, testing, and cloud deployment.",
    skills: ["REST APIs", "Network Automation", "DevOps"],
    files: [
      documentLink(
        certificatePath,
        "cisco-devnet-associate-course-completion.pdf",
        "Cisco credential"
      ),
      documentLink(
        certificatePath,
        "cisco-devnet-associate-program-completion.pdf",
        "Program certificate"
      ),
    ],
  },
  {
    title: "Resilience",
    issuer: "Nestlé",
    issued: "2026",
    description:
      "Professional-development learning focused on adaptability, constructive responses to challenges, and sustainable personal performance.",
    skills: ["Resilience", "Adaptability", "Professional Development"],
    files: [documentLink(certificatePath, "nestle-resilience.pdf")],
  },
  {
    title: "Data Analyst",
    issuer: "Udemy",
    issued: "2025",
    description:
      "Data-analysis coursework focused on turning raw data into structured insights through practical analytical workflows.",
    skills: ["Data Analysis", "Data Visualization", "Reporting"],
    files: [documentLink(certificatePath, "udemy-data-analyst.pdf")],
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    issued: "2025",
    description:
      "Skills verification covering practical software-engineering foundations and problem solving in an internship context.",
    skills: ["Software Engineering", "Problem Solving", "Coding"],
    files: [
      documentLink(
        certificatePath,
        "hackerrank-software-engineer-intern.pdf"
      ),
    ],
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    issued: "2025",
    description:
      "Skills verification for essential SQL querying, filtering, aggregation, joins, and relational-data operations.",
    skills: ["SQL", "Relational Data", "Querying"],
    files: [documentLink(certificatePath, "hackerrank-sql-basic.pdf")],
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "RevoU",
    issued: "2025",
    description:
      "A compact introduction to data analytics, problem framing, exploratory analysis, and communicating evidence-based insights.",
    skills: ["Data Analytics", "Exploratory Analysis", "Communication"],
    files: [
      documentLink(
        certificatePath,
        "revou-introduction-to-data-analytics.pdf"
      ),
    ],
  },
  {
    title: "Programming Competition — 2nd Place",
    issuer: "Information Systems Competition, HMSI ITS",
    issued: "2024",
    description:
      "Second-place achievement in a programming competition, demonstrating algorithmic thinking and implementation under time constraints.",
    skills: ["Competitive Programming", "Algorithms", "Problem Solving"],
    files: [
      documentLink(
        certificatePath,
        "hmsi-its-is-competition-programming-runner-up.pdf"
      ),
    ],
  },
  {
    title: "Introduction to SAP S/4HANA with GBI 4.2",
    issuer: "SAP University Alliances",
    issued: "2024",
    description:
      "Introduction to integrated enterprise processes and the SAP S/4HANA environment through the Global Bike case study.",
    skills: ["SAP S/4HANA", "ERP", "Business Processes"],
    files: [
      documentLink(certificatePath, "sap-s4hana-gbi-introduction.pdf"),
    ],
  },
];

export const ACTIVITIES = [
  {
    title: "Empowering AI Foundations with Microsoft Fabric",
    issuer: "Microsoft Elevate Training Center",
    issued: "August 2026",
    description:
      "Participated in a grand campus training session on AI foundations and the role of Microsoft Fabric in unified data and analytics workflows.",
    skills: ["Microsoft Fabric", "AI Foundations", "Data Platform"],
    files: [
      documentLink(
        activityPath,
        "microsoft-elevate-ai-foundations-with-fabric.pdf",
        "View participation record"
      ),
    ],
  },
  {
    title: "DevCoach 239 — Building a Hermes Agent",
    issuer: "Dicoding Event",
    issued: "July 2026",
    description:
      "Joined a technical session exploring the shift from conversational chatbots to task-oriented AI agents and agentic workflows.",
    skills: ["AI Agents", "Agentic Workflow", "Generative AI"],
    files: [
      documentLink(
        activityPath,
        "dicoding-devcoach-239-hermes-agent.pdf",
        "View participation record"
      ),
    ],
  },
  {
    title: "IDCamp Alumni Dialogue #5 — Beyond the Code",
    issuer: "Indosat Ooredoo Hutchison Digital Camp",
    issued: "July 2026",
    description:
      "Attended a career dialogue on communication, collaboration, adaptability, and other soft skills that strengthen a sustainable technology career.",
    skills: ["Communication", "Collaboration", "Career Development"],
    files: [
      documentLink(
        activityPath,
        "idcamp-alumni-dialogue-5-soft-skills.pdf",
        "View participation record"
      ),
    ],
  },
  {
    title: "DevCoach 238 — RAG from Concept to Implementation",
    issuer: "Dicoding Event",
    issued: "July 2026",
    description:
      "Participated in a practical introduction to retrieval-augmented generation, covering its core flow from retrieval to grounded LLM responses.",
    skills: ["RAG", "Information Retrieval", "LLM"],
    files: [
      documentLink(
        activityPath,
        "dicoding-devcoach-238-rag.pdf",
        "View participation record"
      ),
    ],
  },
];
