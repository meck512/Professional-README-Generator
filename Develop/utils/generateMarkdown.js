
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contuibution-guidelines)
* [License](#license) 
* [Test instructions](#test-instructions)
* [Questions](#questions)
    
## Description
${data.description}
## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Contuibution Guidelines
${data.contribution}
## License
[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
## Test Instructions
${data.test}
## Questions
<p>Contact Information</p>
### GitHub Profile
[GitHub Profile](http://github.com/${data.username})
### Email address
[Email Address](${data.email})`
}

module.exports = generateMarkdown;

