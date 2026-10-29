export type Project = {
  id: number;
  title: string;
  client?: string;
  category: string;
  shortDesc: string;
  details: string[];
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: 5,
    title: "AWS → TencentDB Migration",
    client: "XL",
    category: "API Test Automation",
    shortDesc:
      "Verified a database migration from AWS to TencentDB with an automated, sequenced Postman API test suite.",
    details: [
      "Built automated Postman collections that run in sequence to cover every endpoint end to end",
      "Chained requests and assertions to confirm data and behaviour stayed consistent after the migration",
      "Prepared ACK documents and test reports for sign-off",
    ],
    tech: ["Postman", "API Testing", "AWS", "TencentDB"],
  },
  {
    id: 1,
    title: "Backoffice",
    client: "Homprep",
    category: "Test Automation",
    shortDesc:
      "Built an end-to-end Cypress suite covering multi-role backoffice workflows, alongside hands-on manual testing.",
    details: [
      "Wrote reusable Cypress scripts shared across multiple user flows and roles",
      "Ran the suite in CI/CD on GitHub Actions runners with Cypress Cloud reporting",
      "Kept tests stable and non-flaky so critical bugs surfaced early",
    ],
    tech: ["Cypress", "Cypress Cloud", "JavaScript", "GitHub Actions", "Jira"],
  },
  {
    id: 2,
    title: "E-Sourcing",
    client: "Kalbe Farma",
    category: "Full Test Lifecycle",
    shortDesc:
      "Owned the testing life cycle end to end — from turning the SRS into test cases to tracking bugs to closure.",
    details: [
      "Translated business documents into test scenarios and test cases",
      "Executed functional and edge-case tests against the scenarios",
      "Validated backend endpoints with Postman",
      "Worked closely with developers to report, track and retest bugs",
    ],
    tech: ["Postman", "Excel"],
  },
  {
    id: 3,
    title: "SmartHR",
    client: "Kalbe Farma",
    category: "Functional & Load Testing",
    shortDesc:
      "Executed test scenarios on a tight deadline, covering functional, edge-case, API and load testing.",
    details: [
      "Ran load tests with JMeter to check behaviour under pressure",
      "Executed API tests in Postman, including negative cases",
      "Reported progress to the Project Manager in daily stand-ups",
    ],
    tech: ["JMeter", "Postman", "Excel"],
  },
  {
    id: 4,
    title: "Student Score Dashboard",
    category: "Development",
    shortDesc:
      "A web app for a tutoring centre (bimbingan belajar) to manage students, record scores and generate reports.",
    details: [
      "Designed the database schema in Supabase",
      "Built CRUD features to manage students and their classes",
      "Added score input with PDF report export",
    ],
    tech: ["Node.js", "Express.js", "EJS", "Supabase", "JavaScript", "CSS"],
  },
];
