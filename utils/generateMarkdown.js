// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.projectTitle}
  ![license badge](https://img.shields.io/badge/license-${data.licenseInformation}-blue)
  ### Description
  ${data.description}
  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation
  ${data.installationInstructions}
  ### Usage
  ${data.usageInformation}
  ### Contributions
  ${data.contributionGuidelines}
  ### License
  Licensed under the ${data.licenseInformation} license.
  ### Tests
  ${data.testInstructions}
  ### Questions
  If you have additional questions, you can contact me here: ${data.emailAddress}
  Check out my GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;
}

module.exports = generateMarkdown;
