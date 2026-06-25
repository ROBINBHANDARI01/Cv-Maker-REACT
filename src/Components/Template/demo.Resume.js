// src/data/demoResumes.js

// src/data/robinBhandari.js

export const robinBhandari = {
  general: {
    firstName: "Robin Singh",
    lastName: "Bhandari",
    role: "Frontend Developer | React Developer | Aspiring DevOps Engineer",
    email: "robinbhandari202@gmail.com",
    mobile: "+91 7417629458",
    address: "Sarai Faridabad, Haryana, India",
    github: "github.com/ROBINBHANDARI01",
    linkedIn: "linkedin.com/in/robin-bhandari-02120428a",
  },
  about: {
    aboutYou:
      "MERN Stack Developer with experience building web applications using JavaScript, React.js, MongoDB, and modern development tools. Skilled in developing responsive user interfaces, integrating REST APIs, managing application state, and implementing component-based architecture. Hands-on experience building and deploying real-world projects, including full-stack applications with authentication, database integration, and modern deployment workflows.",
  },
  experience: [],
  projects: [
    {
      projectName: "CV Maker Web Application",
      projectDescription:
        "Developed a full-stack resume builder with secure JWT authentication, real-time resume preview, and resume management features. Built REST APIs using Node.js and Express.js, integrated MongoDB for data storage, and implemented reusable React components with Context API. Deployed the frontend on Vercel and the backend server on Render, with a focus on clean state management and a smooth editing experience across multiple resume templates.",
      additionalDetails: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Tailwindcss",
        "REST APIs",
        "Postman",
        "Render",
      ],
      liveUrl: "cv-maker-react-vert.vercel.app",
      githubUrl: "",
    },
    {
      projectName: "Financial Dashboard Web Application",
      projectDescription:
        "Developed a responsive dashboard for financial analytics with interactive charts and scalable data tables. Used reusable React components and modern UI practices for maintainability and responsiveness.",
      additionalDetails: ["React.js", "Tailwindcss", "Recharts", "TanStack", "Vercel"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      projectName: "Weather Forecast Web Application",
      projectDescription:
        "Created a weather application that fetches and displays real-time weather and forecast data from the OpenWeather API. Implemented asynchronous API calls, dynamic UI updates, and responsive layouts.",
      additionalDetails: ["HTML5", "CSS3", "Javascript", "Rest API", "Vercel"],
      liveUrl: "weather-forecast-website-beta.vercel.app",
      githubUrl: "",
    },
  ],
  skills: [
    {
      skillType: "Frontend Developement",
      skillsList: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Responsive Design",
        "Tailwindcss",
        "Context API",
      ],
    },
    {
      skillType: "Backend Developement",
      skillsList: ["Rest API", "Express.js", "Node.js", "MongoDB", "JWT Auth"],
    },
    {
      skillType: "Deployment & Tools",
      skillsList: ["Render", "Git & Github", "Vercel", "Postman", "Chrome DevTools"],
    },
  ],
  education: [
    {
      educationTitle: "Bachlor's in Computer Application",
      educationPlace: "Graphic Era Hill University",
      educationStart: "2022/04",
      educationEnd: "2025/04",
    },
    {
      educationTitle: "KV ITBP Gauchar",
      educationPlace: "Intermediate",
      educationStart: "2021/02",
      educationEnd: "2022/03",
    },
  ],
};

export default robinBhandari;

// brenda davis
export const BrendaDavis = {
  general: {
    firstName: "Brenda",
    lastName: "Davis",
    role: "Product Designer",
    email: "wendy.davis@mail.com",
    mobile: "+1 (415) 555-0142",
    address: "San Francisco, CA",
    github: "github.com/wendydavis",
    linkedIn: "linkedin.com/in/wendydavis",
  },
  about: {
    aboutYou:
      "Product designer with 6+ years crafting clean, usable interfaces for SaaS and fintech products. I obsess over the gap between a good idea and a good experience, and spend as much time on edge cases and empty states as I do on the main flow. Comfortable partnering with engineering and product from early discovery through to shipped, measurable outcomes.",
  },
  experience: [
    {
      role: "Senior Product Designer",
      companyName: "Lumen Finance",
      start: "2022",
      end: "Present",
      description:
        "Led end-to-end design for the core banking dashboard, cutting onboarding drop-off by 31% through a redesigned setup flow. Partnered with research to run quarterly usability studies and built a lightweight design system now used by 3 product squads.",
    },
    {
      role: "Product Designer",
      companyName: "Northwind Labs",
      start: "2019",
      end: "2022",
      description:
        "Owned design for the mobile app redesign, partnering closely with engineering to ship a new component library used across 4 product teams. Drove a 22% increase in mobile retention through improved onboarding and navigation patterns.",
    }
  ],
  projects: [
    {
      projectName: "Pulse — Habit Tracker",
      projectDescription:
        "A minimal habit-tracking app focused on streak visualization and weekly review rituals. Designed and built the full UI in React, with a custom calendar heatmap component and a reflection flow that prompts users to review their week every Sunday.",
      additionalDetails: ["React , Figma , Tailwind CSS"],
      liveUrl: "pulse-app.com",
      githubUrl: "github.com/wendydavis/pulse",
    },
    {
      projectName: "Design System: Atlas",
      projectDescription:
        "An open-source component library and token system built for fast-moving product teams, with built-in accessibility checks and documented usage guidelines for every component, helping teams ship consistent UI without re-designing common patterns from scratch.",
      additionalDetails: ["Storybook, Tokens Studio, Accessibility"],
      liveUrl: "atlas-ds.dev",
      githubUrl: "github.com/wendydavis/atlas",
    },
  ],
  skills: [
    { skillType: "Design", skillsList: ["Figma", "Prototyping", "Design Systems", "User Research"] },
    { skillType: "Frontend", skillsList: ["HTML/CSS", "React", "Tailwind CSS"] },
  ],
  education: [
    {
      educationTitle: "B.F.A. in Graphic Design",
      educationPlace: "California College of the Arts",
      educationStart: "2013",
      educationEnd: "2017",
    },
    {
      educationTitle: "UX Design Certificate",
      educationPlace: "Nielsen Norman Group",
      educationStart: "2018",
      educationEnd: "2018",
    },
  ],
};

export const milliSmith = {
  general: {
    firstName: "Milli",
    lastName: "Smith",
    role: "Full Stack Developer",
    email: "milli.smith@mail.com",
    mobile: "+44 7700 900142",
    address: "London, UK",
    github: "github.com/millismith",
    linkedIn: "linkedin.com/in/millismith",
  },
  about: {
    aboutYou:
      "Full stack developer specializing in React and Node, with a strong focus on performance and developer experience. I enjoy taking products from zero to production, and care a lot about clean APIs, sensible defaults, and code that's easy for the next person to pick up. Equally happy debugging a slow query or polishing a tricky bit of frontend state.",
  },
  experience: [
    {
      role: "Full Stack Developer",
      companyName: "Hatchwork",
      start: "2021",
      end: "Present",
      description:
        "Built and maintained the core platform serving 50k+ monthly active users; reduced API response times by 40% through query optimization and caching. Mentored two junior developers and introduced CI checks that cut production bugs by a third.",
    },
    {
      role: "Backend Developer",
      companyName: "Forge Systems",
      start: "2019",
      end: "2021",
      description:
        "Designed REST APIs and database schemas for a logistics management platform used by 200+ warehouses. Led the migration from a monolithic service to a modular architecture, improving deploy frequency across the team.",
    },
    {
      role: "Junior Developer",
      companyName: "Pixel Forge Studio",
      start: "2017",
      end: "2019",
      description:
        "Contributed to client web applications across e-commerce and media clients, building reusable UI components and fixing cross-browser issues under senior developer guidance.",
    },
  ],
  projects: [
    {
      projectName: "Routely — Delivery Optimizer",
      projectDescription:
        "A route optimization tool for small delivery fleets, using a custom algorithm to cut average delivery time by 18%. Includes a live map view, driver assignment, and a dashboard for tracking delivery performance over time.",
      additionalDetails: ["Node.js", "PostgreSQL", "Docker"],
      liveUrl: "routely.io",
      githubUrl: "github.com/millismith/routely",
    },
    {
      projectName: "DevDash",
      projectDescription:
        "An internal analytics dashboard for engineering teams to track deploy frequency, incident rates, and PR cycle time. Pulls data from GitHub and the team's CI pipeline to surface trends and flag slowdowns before they become a problem.",
      additionalDetails: ["React", "GraphQL", "Chart.js"],
      liveUrl: "devdash.app",
      githubUrl: "github.com/millismith/devdash",
    },
    {
      projectName: "ShelfSpace — Inventory Tracker",
      projectDescription:
        "A lightweight inventory tracking tool for small warehouses, with barcode scanning support and low-stock alerts. Built as a side project to explore offline-first sync patterns using a local-first database with background sync.",
      additionalDetails: ["React Native", "SQLite", "Node.js"],
      liveUrl: "",
      githubUrl: "github.com/millismith/shelfspace",
    },
  ],
  skills: [
    { skillType: "Languages", skillsList: ["JavaScript", "TypeScript", "Python"] },
    { skillType: "Frameworks", skillsList: ["React", "Node.js", "Express"] },
    { skillType: "Tools", skillsList: ["Docker", "PostgreSQL", "AWS"] },
  ],
  education: [
    {
      educationTitle: "B.Sc. in Computer Science",
      educationPlace: "University of Manchester",
      educationStart: "2015",
      educationEnd: "2019",
    },
    {
      educationTitle: "A-Levels: Maths, Physics, Computer Science",
      educationPlace: "Greenfield Sixth Form College",
      educationStart: "2013",
      educationEnd: "2015",
    },
  ],
};

export const waldo = {
  general: {
    firstName: "Waldo",
    lastName: "Smith",
    role: "Marketing Strategist",
    email: "waldo.hartmann@mail.com",
    mobile: "+49 170 1234567",
    address: "Berlin, Germany",
    github: "",
    linkedIn: "linkedin.com/in/waldohartmann",
  },
  about: {
    aboutYou:
      "Marketing strategist with a decade of experience driving growth for consumer brands. I turn audience insight into campaigns that actually move the needle, working across brand positioning, paid acquisition, and lifecycle marketing. Known for pairing creative instinct with a close read of the numbers, and for building marketing playbooks that teams can repeat as a brand scales into new markets.",
  },
  experience: [
    {
      role: "Senior Marketing Strategist",
      companyName: "Brandlight Agency",
      start: "2020",
      end: "Present",
      description:
        "Led full brand repositioning and go-to-market campaign for a regional coffee chain, resulting in a 35% increase in foot traffic in the first quarter.",
    },
    {
      role: "Marketing Manager",
      companyName: "Kettel & Co.",
      start: "2016",
      end: "2020",
      description:
        "Ran integrated campaigns across paid, organic, and email channels for a DTC home goods brand, tripling email list size in two years and launching the brand's first loyalty program.",
    },
  ],
  projects: [
    {
      projectName: "Rebrand: Solis Coffee",
      projectDescription:
        "Led full brand repositioning and go-to-market campaign for a regional coffee chain, resulting in a 35% increase in foot traffic in the first quarter. Oversaw everything from new brand identity guidelines to launch-week local media partnerships.",
      additionalDetails: ["Brand Strategy", "Campaign Planning", "Market Research"],
      liveUrl: "soliscoffee.com",
      githubUrl: "",
    },
    {
      projectName: "Growth Playbook: Aspen Fitness",
      projectDescription:
        "Built and executed a multi-channel acquisition playbook for a boutique fitness chain expanding into 3 new cities. Combined local SEO, geo-targeted paid social, and referral incentives to hit membership targets ahead of schedule.",
      additionalDetails: ["Paid Media", "Local SEO", "Analytics"],
      liveUrl: "aspenfitness.com",
      githubUrl: "",
    },
  ],
  skills: [
    { skillType: "Strategy", skillsList: ["Brand Positioning", "Market Research", "Campaign Planning"] },
    { skillType: "Channels", skillsList: ["Paid Media", "Email Marketing", "SEO"] },
  ],
  education: [
    {
      educationTitle: "M.A. in Marketing",
      educationPlace: "Humboldt University of Berlin",
      educationStart: "2012",
      educationEnd: "2014",
    },
    {
      educationTitle: "B.A. in Communications",
      educationPlace: "University of Hamburg",
      educationStart: "2008",
      educationEnd: "2012",
    },
  ],
};

export const demoResumes = { robinBhandari, BrendaDavis, milliSmith, waldo };