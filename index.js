// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const mockData = require('./utils/mockData');
const questions = require('./utils/questionsArray');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, generateMarkdown(data), err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    // .then((answers) => {
    //     console.log(answers);
    // })
    // .catch((error) => {
    //     console.error(error);
    // });
    writeToFile('./out/README.md', mockData);
}

// Function call to initialize app
init();
