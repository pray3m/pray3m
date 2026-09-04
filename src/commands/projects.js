import chalk from "chalk";

const featuredProjects = [
  {
    name: "Pikeah",
    description:
      "A multi-tenant LinkedIn outreach platform with a dashboard, API, browser extension, unified inbox, team permissions, and campaign automation.",
    stack: "Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Docker, WXT",
  },
  {
    name: "Maison & Architecture",
    description:
      "A multi-app platform for France's architecture and construction market, including a public site, admin portal, partner portal, and shared frontend kit.",
    stack: "Next.js, TypeScript, Tailwind CSS, Supabase, Vercel",
  },
  {
    name: "CRO Scan",
    description:
      "An AI website-conversion auditor that turns broad conversion advice into concrete, prioritized improvements.",
    stack: "Next.js, TypeScript, OpenAI, Node.js",
  },
];

export const projects = () => {
  console.log(chalk.cyan.bold("\nFeatured Projects\n"));

  for (const project of featuredProjects) {
    console.log(chalk.bold(project.name));
    console.log(project.description);
    console.log(chalk.dim(project.stack));
    console.log();
  }

  console.log(`${chalk.bold("More:")} https://premgautam.me/projects\n`);
};
