
function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.license === "APACHE 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (data.license === "GNU Public v3.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
}

return `# ${data.title}

    ## Table of Contents
    - [Description](#Description)
    - [Installation](#Installation-Instructions)
    - [Usage Information](#Usage-Information)
    - [Contribution Guidelines](#Contuibution-Guidelines)
    - [License](#License)
    - [Test instructions](#Test-Instructions) 
    - [Questions](#Questions)
    
    ## Description
    ${data.description}
    ## Installation Instructions 
    ${data.installation}
    ## Usage Information 
    ${data.usage}
    ## Contuibution Guidelines
    ${data.contribution}
    ## License
    ${data.license}
    ## Test Instructions
     ${data.test}
    ## Questions
    ### GitHub Profile
    [GitHub Profile](http://github.com/${data.username})
    ### Email address
    [Email Address](${data.email})
  `;
  }

module.exports = generateMarkdown;
