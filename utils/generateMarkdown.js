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
//use the github template and make some of the words template literals for what comes from user input
// example: ${renderLicenseBadge(data.license)}
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

//use a switch case for badges