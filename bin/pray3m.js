#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Command } from "commander";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { about, projects } from "../src/index.js";

const program = new Command();

// Function to display ASCII Art Banner
const displayBanner = () => {
  return new Promise((resolve) => {
    figlet("Pray3m", (err, data) => {
      if (err) {
        console.log("Something went wrong with figlet...");
        console.dir(err);
        resolve();
        return;
      }
      console.log(gradient.pastel.multiline(data));
      resolve();
    });
  });
};

// Function to display animated welcome message
const displayWelcome = async () => {
  const rainbow = chalkAnimation.rainbow(
    "\nWelcome to Prem Gautam's Portfolio CLI!\n"
  );
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Duration of the animation
  rainbow.stop(); // Stop the animation after 2 seconds
};

if (!process.argv.slice(2).length) {
  (async () => {
    await displayBanner(); // Display the ASCII art banner
    await displayWelcome(); // Display the animated welcome message

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
  })();
}

program.parse(process.argv);
