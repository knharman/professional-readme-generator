const urlencode = require('urlencode');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "No License") {
    return ""
  }
  const urlFriendlyLicense = urlencode(license)
  return `![license badge](https://img.shields.io/badge/license-${urlFriendlyLicense}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "noLicense") {
    return ""
  }
  return `https://choosealicense.com/licenses/${license}/`
}

function generateLicenseSection(uiName, linkName) {
  if (uiName == "No License") {
    return ""
  }
  return `### License
  Licensed under the [${uiName}](${renderLicenseLink(linkName)}) license.`
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
  ${ data.licenseInformation.linkName != "noLicense" ? '* [License](#license)' : ''}
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation
  ${data.installationInstructions}
  ### Usage
  ${data.usageInformation}
  ### Contributions
  ${data.contributionGuidelines}
  ${generateLicenseSection(data.licenseInformation.uiName, data.licenseInformation.linkName)}
  ### Tests
  ${data.testInstructions}
  ### Questions
  If you have additional questions, you can contact me here: ${data.emailAddress}
  Check out my GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;
}

module.exports = generateMarkdown;
