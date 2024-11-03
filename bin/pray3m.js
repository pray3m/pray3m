import chalk from "chalk";
import { Command } from "commander";
import inquirer from "inquirer";
import { about, projects } from "../src/index.js";
const program = new Command();

program
  .name("pray3m")
  .description("CLI portfolio for Prem Gautam")
  .version("1.0.0");

if (!process.argv.slice(2).length) {
  console.log(chalk.green.bold("\nWelcome to Prem Gautam's Portfolio CLI!\n"));

  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to know?",
        choices: [
          { name: chalk.blue("About Me"), value: "about" },
          { name: chalk.green("View Projects"), value: "projects" },
          { name: chalk.magenta("View Skills"), value: "skills" },
          { name: chalk.red("Contact Me"), value: "contact" },
          { name: chalk.yellow("Exit"), value: "exit" },
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "about":
          about();
          break;
        case "skills":
          console.log(
            chalk.green.bold(
              "\nI have skills in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.\n"
            )
          );
          break;
        case "projects":
          projects();
          break;
        case "contact":
          console.log(
            chalk.green.bold("\nYou can contact me at premgautam.com.\n")
          );
          break;
        case "exit":
          console.log(
            chalk.blue("Thank you for visiting my portfolio CLI. Goodbye!\n")
          );
          process.exit();
      }
    });
}

program.parse(process.argv);
