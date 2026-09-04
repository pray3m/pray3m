import chalk from "chalk";

export const about = () => {
  console.log(
    [
      chalk.cyan.bold("\nPrem Gautam"),
      chalk.white("Full-Stack Engineer · Nepal"),
      "",
      "I build production SaaS end to end: React and Next.js frontends,",
      "Node.js and NestJS backends, PostgreSQL and Prisma data layers,",
      "Docker deployments, and AI integrations where they improve the product.",
      "",
      `${chalk.bold("Portfolio:")} https://premgautam.me`,
      `${chalk.bold("GitHub:")}    https://github.com/pray3m`,
      `${chalk.bold("LinkedIn:")}  https://linkedin.com/in/pray3m`,
      "",
    ].join("\n")
  );
};
