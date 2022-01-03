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
  ### Description
  ${data.description}
  ### Installation Instructions
  ${data.installationInstructions}
  ### Usage Information
  ${data.usageInformation}
  ### Contribution Guidelines
  ${data.contributionGuidelines}
  ### Test Instructions
  ${data.testInstructions}
  ### Questions
  If you have additional questions, you can contact me here: ${data.emailAddress}
  Check out my GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;
}

module.exports = generateMarkdown;
