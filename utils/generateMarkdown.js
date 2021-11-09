// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Apache":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "BSD 3":
      return "[License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case "BSD 2":
      return "[License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
      break;
    case "GPL":
      return "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "LGPL":
      return "[License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      break;
    case "Mozilla":
      return "[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
    case "Eclipse":
      return "[License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      return "[License](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3":
      return "[License](https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2":
      return "[License](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "GPL":
      return "[License](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "LGPL":
      return "[License](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla":
      return "[License](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Eclipse":
      return "[License](https://opensource.org/licenses/EPL-1.0)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
