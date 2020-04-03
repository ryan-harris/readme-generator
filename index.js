const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
require("dotenv").config();

const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    name: "project",
    message: "What is your project's name?"
  },
  {
    name: "description",
    message: "Write a short description of your project:"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "MPL 2.0"]
  },
  {
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  }
];

// if there is no token to get emails from github, add an email question to the question array
if (!process.env.TOKEN) {
  questions.splice(1, 0, {
    name: "email",
    message: "What is your email?"
  });
}

function writeToFile(filename, data) {
  fs.writeFileSync(filename, data);
  console.log(`README created successfully. ${path.resolve(filename)}`);
}

function init() {
  inquirer.prompt(questions).then(answers => {
    console.log("Searching...");
    api.getUser(answers.username).then(userData => {
      // combine answers and userData to a single object
      const data = { ...userData, ...answers };
      writeToFile("./output/README.md", generateMarkdown(data));
    });
  });
}

init();
