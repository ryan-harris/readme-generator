function generateMarkdown(data) {
  return `
# ${data.project}

[![License](https://img.shields.io/badge/License-${data.license.replace(
    " ",
    "%20"
  )}-blue.svg)](${data.html_url}/${data.project
    .toLowerCase()
    .replace(" ", "-")})

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

<img src="${
    data.avatar_url
  }" alt="avatar" style="border-radius: 40px" width="80" />

If you have questions about the repo, open an issue or contact [${
    data.username
  }](${data.html_url}) directly at ${data.email}

`;
}

module.exports = generateMarkdown;
