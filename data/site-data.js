/*
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT: edit this file to update the website.
 *  No HTML changes needed. Save, commit, push.
 *
 *  Filled from the resume. Still to do before publishing:
 *    - Contact: uncomment and fill in LinkedIn and GitHub
 *    - Resume: add the PDF to assets/docs/ and set its url
 *    - Add company names to work history if you want them shown
 *      (add company: "Name" to a role; it renders as "Title · Name")
 *
 *  Empty url ("") on any document shows "Coming soon" instead of a link.
 * ─────────────────────────────────────────────────────────────
 */
window.SITE_DATA = {

  /* ── Hero ─────────────────────────────────────────────── */
  intro: [
    "I'm a Senior Data Engineer with 10+ years of experience building the pipelines and platforms that move business data from source systems into stores people can trust. Most of my work is on AWS, with Azure exposure, using Python, PySpark and SQL.",
    "I like pipelines that are config-driven, observable and uneventful to run: validated row counts, structured logs, alerts that mean something. I'm now extending that foundation into GenAI, RAG and agentic systems."
  ],
  focus: ["Data engineering", "Cloud", "Big data", "ETL", "AWS / Azure", "Python", "Spark", "SQL"],

  /* Resume: put the PDF in assets/docs/ and set url, e.g. "assets/docs/Thirupathi-V-Resume.pdf" */
  resume: {
    title: "Resume (PDF)",
    note: "Full work history and skills.",
    url: ""
  },

  /* ── Key achievements ─────────────────────────────────── */
  achievements: [
    { value: "10+",     label: "years in data engineering" },
    { value: "20M+",    label: "records processed per day" },
    { value: "500+",    label: "tables migrated" },
    { value: "2 TB+",   label: "of data modernized" },
    { value: "300+",    label: "Redshift tables" },
    { value: "7",       label: "engineers led" }
  ],

  /* ── Work history (most recent first) ─────────────────── */
  /* Each role shows: title, dates, optional location, and one short line naming the main technologies. */
  experience: [
    {
      title: "Senior Data Engineer",
      dates: "Apr 2026 to Present",
      location: "Chicago, IL",
      summary: "AWS Glue, PySpark, Spark SQL, S3, Redshift and RDS PostgreSQL pipelines processing 20M+ records a day. Leading a team of 7 and a 500+ table SQL Server to PostgreSQL migration."
    },
    {
      title: "ETL Data Engineer IV",
      dates: "Apr 2024 to Mar 2026",
      summary: "Data pipelines on AWS S3, Glue, Redshift, EMR, Lambda and Step Functions with PySpark, Spark SQL, Python and Talend. Cut query times 30% by partitioning 1 TB+ of Parquet data."
    },
    {
      title: "Senior ETL Engineer",
      dates: "Jul 2020 to Mar 2024",
      summary: "Metadata-driven ETL with Talend, DataStage, Spark and Python, scheduled in Airflow and deployed with Docker, Kubernetes and Jenkins."
    },
    {
      title: "Big Data / Support Engineer",
      dates: "Aug 2018 to Jun 2020",
      summary: "Hadoop, Hive, Spark, Sqoop and Kafka pipelines, plus Azure Data Factory, Databricks and Snowflake work, with 24/7 production support."
    },
    {
      title: "ETL / Talend Developer",
      dates: "Oct 2016 to Jun 2018",
      summary: "Talend ETL and Spark ingestion from Oracle and MySQL to S3, with SCD Type 1 and 2 loads, error-handling frameworks and SQL tuning."
    }
  ],

  /* ── Featured projects ────────────────────────────────── */
  projects: [
    {
      title: "Metadata-driven ingestion on AWS Glue",
      problem: "300+ tables shared from Amazon Redshift, plus S3 file feeds, had to load into RDS PostgreSQL without writing and maintaining a custom job per table.",
      built: "A dynamic PySpark Glue ingestion driven by configuration. It maps source files and shared tables to targets, matches columns by name, validates row counts, retries failures and archives processed files. Runs are logged with a run_id to CloudWatch, with SNS alerts. I also worked with producer and consumer teams to validate Redshift Data Sharing objects before loads.",
      tech: ["AWS Glue", "PySpark", "Redshift Data Sharing", "S3", "RDS PostgreSQL", "SNS", "CloudWatch"],
      impact: "Cut table-specific development effort by 40% across 300+ tables."
    },
    {
      title: "On-prem SQL Server to PostgreSQL migration",
      problem: "A large on-premises SQL Server estate needed to move to PostgreSQL without hand-converting every object.",
      built: "Reusable Python scripts that automated the migration, together with modernizing the stored procedures, functions, views and SQL logic that came with the data.",
      tech: ["Python", "SQL Server", "PostgreSQL", "AWS RDS"],
      impact: "500+ tables and 2 TB+ of data migrated."
    },
    {
      title: "Credit card data ingestion and Customer View",
      problem: "Card, account, transaction and payment data arrived in mixed formats, and collections teams had no single view of a customer.",
      built: "S3-to-RDS ingestion for CSV, delimited, TSYS and segmented EBCDIC feeds, then an integrated Customer View joining demographics, cards, loans, payments, collections, recovery, litigation and foreclosure data. Tuned the PySpark, Spark SQL and PostgreSQL workloads with partitioning, join optimization and execution-plan analysis.",
      tech: ["AWS Glue", "PySpark", "Spark SQL", "S3", "RDS PostgreSQL", "Power BI"],
      impact: "15 to 22M records per load, a Customer View across 5M+ records, and 30% faster critical workloads."
    },
    {
      title: "Text-to-SQL agent",
      problem: "Business users wanted answers from a Postgres database without writing SQL.",
      built: "An agent that discovers the database schema automatically, uses Claude to turn a plain-English question into SQL, runs it through psycopg2 with credentials from AWS Secrets Manager, and returns readable results.",
      tech: ["Python", "Claude API", "PostgreSQL", "psycopg2", "AWS Secrets Manager"],
      impact: "A hands-on agentic AI build on top of a real data-engineering stack.",
      link: { label: "Source", href: "" }
    }
  ],

  /* ── Technical skills ─────────────────────────────────── */
  skills: [
    { category: "Programming",              items: ["Python", "SQL", "PL/SQL", "Shell scripting"] },
    { category: "Data engineering & ETL",   items: ["Talend", "IBM DataStage", "Metadata-driven ingestion", "Data migration", "SCD Type 1 & 2", "Star & snowflake modeling", "Data validation"] },
    { category: "Cloud",                    items: ["AWS Glue", "S3", "EMR", "Lambda", "Redshift", "RDS", "Athena", "Kinesis", "SQS / SNS", "Step Functions", "CloudWatch", "Azure Data Factory", "Azure Data Lake"] },
    { category: "Big data",                 items: ["Apache Spark", "PySpark", "Spark SQL", "Hadoop", "HDFS", "Hive", "Sqoop", "HBase", "Kafka", "Databricks"] },
    { category: "Databases",                items: ["PostgreSQL", "Amazon Redshift", "Oracle", "SQL Server", "MySQL", "DB2", "DynamoDB", "MongoDB", "Snowflake"] },
    { category: "DevOps & CI/CD",           items: ["Git", "GitHub Actions", "Jenkins", "GitLab", "Docker", "Kubernetes", "Terraform", "Grafana"] },
    { category: "Orchestration",            items: ["Apache Airflow", "AWS Step Functions", "IBM TWS", "Control-M", "Oozie"] },
    { category: "Visualization",            items: ["Power BI", "Tableau", "Kibana"] }
  ],

  /* ── Learning & documents ─────────────────────────────── */
  learning: [
    { topic: "Generative AI and LLMs",     note: "Prompting, evaluation, and using LLMs inside data workflows." },
    { topic: "RAG",                        note: "Chunking, embeddings, vector search, and grounding answers in company data." },
    { topic: "Agentic AI",                 note: "Tool-using agents with LangGraph and MCP, built against real databases." },
    { topic: "AWS",                        note: "Going deeper on data platform services, security and cost." },
    { topic: "Modern data engineering",    note: "Data quality, observability, and current lakehouse practices." }
  ],

  /*
   * Add a document: { title, note, url }.  url can be a file in assets/docs/
   * or a full https:// link. Leave url "" to show "Coming soon".
   * Leave items: [] to show an empty group as "Coming soon".
   * The Resume group is built from `resume` above.
   */
  documents: [
    {
      group: "Technical notes",
      items: [
        { title: "Pausing and resuming EventBridge schedules", note: "Without deleting or redeploying them.", url: "" }
      ]
    },
    {
      group: "Architecture diagrams",
      items: [
        { title: "Metadata-driven Glue ingestion", note: "Redshift and S3 sources to RDS Postgres, with validation and alerting.", url: "" }
      ]
    },
    {
      group: "Project documentation",
      items: [
        { title: "Text-to-SQL agent: design notes", note: "Schema discovery, prompting, and result handling.", url: "" }
      ]
    },
    {
      group: "Certifications",
      items: []
    }
  ],

  /* ── Contact ──────────────────────────────────────────── */
  contact: {
    text: "Open to conversations about data platforms, cloud migrations and agentic AI on top of real data. The quickest way to reach me is email.",
    links: [
      { label: "Email",    href: "mailto:vthiru.ai@gmail.com",                 text: "vthiru.ai@gmail.com" }
      // { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR-HANDLE",  text: "linkedin.com/in/YOUR-HANDLE" },
      // { label: "GitHub",   href: "https://github.com/YOUR-USERNAME",         text: "github.com/YOUR-USERNAME" }
    ]
  }
};
