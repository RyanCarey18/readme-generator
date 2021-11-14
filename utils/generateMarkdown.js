// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      response =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      response =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3":
      response =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2":
      response =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "GPL":
      response =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "LGPL":
      response =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla":
      response =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Eclipse":
      response =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "None":
      response = "";
      break;
    default:
      response = "";
  }
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      response = "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      response = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3":
      response = "(https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2":
      response = "(https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "GPL":
      response = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "LGPL":
      response = "(https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla":
      response = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Eclipse":
      response = "(https://opensource.org/licenses/EPL-1.0)";
      break;
    case "None":
      response = "";
      break;
    default:
      response = "";
  }
  return response;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  if (license === "None") {
    const licenseSection = "";
    return licenseSection;
  } else {
    const licenseSection = `## License

This application is covered under the [${license}]${link} license.
`;

    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response, licenseBadge, licenseSection) {
  return `# ${response.title}
${licenseBadge}

## Description

${response.description}

## Table of Contents

- [Installation](#Installation)

- [Usage](#Usage)

- [Contributing](#Contributing)

- [Tests](#Tests)

- [License](#License)

- [Questions](#Questions)

## Installation

Do the following to install:
${"```"}
${response.installation}
${"```"}

## Usage

${response.usage}

${licenseSection}
## Contributing

${response.contribute}

## Tests

To test use the following code:
${"```"}
${response.test}
${"```"}

## Questions

If you have any questions about the repository you can contact me at ${
    response.email
  }. Otherwise you can find me on GitHub [here](https://github.com/${
    response.github
  }).
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
