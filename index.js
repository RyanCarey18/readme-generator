// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "A short description of your project?",
  "Installation Instructions?",
  "How to use your project?",
  "Which License would you like to use?",
  "What are your contribution guidelines?",
  "Instructions for testing?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) =>
    err ? console.error(err) : console.log("README.md created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "desciption",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "use",
      },
      {
        type: "list",
        message: questions[4],
        name: "license",
        choices: [
          "MIT",
          "Apache",
          "BSD 3",
          "BSD 2",
          "GPL",
          "LGPL",
          "Mozilla",
          "Eclipse",
        ],
      },
      {
        type: "input",
        message: questions[5],
        name: "contributions",
      },
      {
        type: "list",
        message: questions[5],
        name: "test",
      },
    ])
    .then((response) => {
      const license = generateMarkdown.renderLicenseBadge(response.license);
      writeToFile(README.md, license);
    });
}

// Function call to initialize app
init();

// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
