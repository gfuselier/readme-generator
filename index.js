// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    }, {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    }, {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    }, {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    }, {
        type: 'list',
        name: 'license',
        message: 'What license will your project have?',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'MPL 2.0']
    }, {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    }, {
        type: 'input', 
        name: 'email',
        message: 'What is your email?',
    }
];

// This function will initialize the app: first it will prompt the questions, then write the file
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('./sample/README.md', generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('README generated!'));
    })
}

// Function call to initialize app
init();
