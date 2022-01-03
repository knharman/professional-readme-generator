const validation = require('./validation');

const questions = [
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
        validate: validation.checkIsEmail
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Please provide installation instructions for your project.",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Please provide usage information about your project.",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "How can users contribute to your project?",
        validate: validation.checkNotEmpty
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How can users test your project?",
        validate: validation.checkNotEmpty
    }
];

module.exports = questions;