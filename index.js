const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
require("dotenv").config();

const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "project",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  }
];

// if there is no token to get emails from github, add an email question to the question array
if (!process.env.TOKEN) {
  questions.splice(1, 0, {
    type: "input",
    name: "email",
    message: "What is your email?"
  });
}

function writeToFile(filename, data) {
  fs.writeFileSync(filename, data);
  console.log(`Readme created successfully. ${path.resolve(filename)}`);
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log("Searching...");
    api.getUser(answers.username).then(userData => {
      // combine answers and userData to a single object
      const data = { ...userData, ...answers };
      console.log(data);
    });
  });
}

init();
