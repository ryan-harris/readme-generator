// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  return `
# ${data.title}
//TODO badge and repo link

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have questions about the repo, open an issue or contact [${data.username}](${data.html_url}) directly at ${data.email}

`;
}

module.exports = generateMarkdown;
