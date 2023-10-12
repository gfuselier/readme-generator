// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//use a switch case for badges
function renderLicenseBadge(license) {
  if (license) {

  } else {return "";}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  "https://img.shields.io/badge/license-MIT-yellow"

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//use the github template and make some of the words template literals for what comes from user input
// example: ${renderLicenseBadge(data.license)}
function generateMarkdown(data) {
  return `
# ${data.title}

![Static Badge](${renderLicenseLink(data.license)})

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

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`

}

module.exports = generateMarkdown;
