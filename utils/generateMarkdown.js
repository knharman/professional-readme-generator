// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license badge](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://choosealicense.com/licenses/${license}/`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenseInformation.uiName)}
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
  Licensed under the [${data.licenseInformation.uiName}](${renderLicenseLink(data.licenseInformation.linkName)}) license.
  ### Tests
  ${data.testInstructions}
  ### Questions
  If you have additional questions, you can contact me here: ${data.emailAddress}
  Check out my GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;
}

module.exports = generateMarkdown;
