// Creates a function that returns the license link.
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://img.shields.io/badge/license-MIT-yellow";
    case 'Apache 2.0':
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case 'ISC':
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case 'MPL 2.0':
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    default:
      return "";
  }
}

//Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license.`
  } else { return ""}
}

//Creates a function to generate markdown for the README
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

//Exports the generateMarkdown function so index.js can use it
module.exports = generateMarkdown;
