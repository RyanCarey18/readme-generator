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
  "What is your Email address?",
  "What is your GitHub?",
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
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
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
          "None",
        ],
      },
      {
        type: "input",
        message: questions[5],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[6],
        name: "test",
      },
      { type: "input", message: questions[7], name: "email" },
      { type: "input", message: questions[8], name: "github" },
    ])
    .then((response) => {
      const licenseBadge = generateMarkdown.renderLicenseBadge(
        response.license
      );
      const licenseLink = generateMarkdown.renderLicenseLink(response.license);
      const licenseSection = generateMarkdown.renderLicenseSection(
        response.license,
        licenseLink
      );
      const markdown = generateMarkdown.generateMarkdown(
        response,
        licenseBadge,
        licenseSection
      );
      writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();

// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
