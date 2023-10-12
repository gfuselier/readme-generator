// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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


// TODO: Create a function to write README file
//connect generatemarkdown file here. Also need to path where the generated readme will go
//ex: fs.writeFile('./folder/name.md)
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app. How?? look at mini project
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('./samples/README.md', generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('README generated!'));
    })
}

// Function call to initialize app. Nothing to do here
init();


//GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README