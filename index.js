// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "A short description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be used to install the dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What does the user need to know about using your repo?",
    name: "usage",
  },
  {
    type: "list",
    message: "Which License would you like to use?",
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
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute",
  },
  {
    type: "input",
    message: "What command should be entered to run tests?",
    name: "test",
    default: "npm test",
  },
  { type: "input", message: "What is your Email address?", name: "email" },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const licenseBadge = generateMarkdown.renderLicenseBadge(response.license);
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
    writeToFile("GENERATEREADME.md", markdown);
  });
}

// Function call to initialize app
init();
