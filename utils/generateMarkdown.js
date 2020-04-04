function getLicenseUrl(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "MPL 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return "";
  }
}

function generateMarkdown(data) {
  return `
# ${data.project}

${
  data.license !== "None"
    ? `[![License ${
        data.license
      }](https://img.shields.io/badge/License-${data.license.replace(
        " ",
        "%20"
      )}-blue.svg)](${getLicenseUrl(data.license)})`
    : ""
}

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

${
  data.license !== "None"
    ? `This project is licensed under the ${data.license} license.`
    : "No License"
}

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
