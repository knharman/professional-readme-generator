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
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: validation.checkNotEmpty
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
        type: "list",
        name: "licenseInformation",
        message: "Choose a license:",
        choices: [
            {
                name: "GNU GPL",
                value: {
                    uiName: "GNU GPL",
                    linkName: "gpl-3.0"
                }
            }, 
            {
                name: "Mozilla Public License",
                value: {
                    uiName: "Mozilla Public License",
                    linkName: "mpl-2.0"
                }
            }, 
            {
                name: "Apache",
                value: {
                    uiName: "Apache",
                    linkName: "apache-2.0"
                }
            }, 
            {
                name: "MIT",
                value: {
                    uiName: "MIT",
                    linkName: "mit"
                }
            }, 
            {
                name: "Boost Software License",
                value: {
                    uiName: "Boost Software License",
                    linkName: "bsl-1.0"
                }
            }, 
            {
                name: "The Unlicense",
                value: {
                    uiName: "The Unlicense",
                    linkName: "unlicense"
                },
            }
        ]
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How can users test your project?",
        validate: validation.checkNotEmpty
    }
];

const choice = {
    name: "The Unilicense",
    value: {
        uiName: "The Unilicense",
        linkName: "unilicense"
    },
}

module.exports = questions;