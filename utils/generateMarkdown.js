// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//use a switch case for badges
// function renderLicenseBadge(license) {
//   if (license) {

//   } else {return "";}
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://img.shields.io/badge/license-MIT-yellow";
    case 'Apache 2.0':
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case 'ISC':
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case 'quotient':
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license.`
  } else { return ""}
}

// TODO: Create a function to generate markdown for README
//use the github template and make some of the words template literals for what comes from user input
// example: ${renderLicenseBadge(data.license)}
function generateMarkdown(data) {
  return `
# ${data.title}

![License](${renderLicenseLink(data.license)})

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

If you have any questions about this application, please contact me at <${data.email}>.
To view my other projects, check out my [github profile](https://github.com/${data.username}).
`}

module.exports = generateMarkdown;
