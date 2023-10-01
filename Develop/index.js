const inquirer = require('inquirer');
const fs = require('fs');

const answersNew = [];
const writeToFile = ([{ fullName, github, email, title, description, installation, usage, license, year, contributing, tests }, { badge }]) =>
`
# ${title}
${badge}

## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [License](#license)

5. [Contributing](#contributing)

6. [Tests] (#test)

7. [Questions] (#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

This application is covered under the ${license} - ${year} ${fullName}. Please refer to LICENSE.md for more details.

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have questions, please refer to my [GitHub profile](https://github.com/${github}). You may also reach me at ${email}.

`

function generateReadme () {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'fullName',
                message: 'Hello! What is your name?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of this project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a description of the project:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please enter installation instructions:',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter usage instructions:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select the license you intend to use from the choices below:',
                choices: ['MIT License', 'Apache License 2.0', 'ISC License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense']
            },
            {
                type: 'input',
                name: 'year',
                message: 'What year was this project licensed?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please enter contribution guidelines:',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please enter testing instructions:',
            },
        ])
        .then((answers) => {

            answersNew.push(answers);

            addBadge(answers);

            console.log(answers, answersNew);

            const [{ fullName, github, email, title, description, installation, usage, license, year, contributing, tests, questions, badge }] = answersNew;

            const readmeTemplate = writeToFile(answersNew);

            fs.writeFile('README.md', readmeTemplate, (err) =>
                (err) ? console.error(err) : console.log("Successfully generated README!")
            );
        })
};

const addBadge = (answers) => {
    if (answers.license === 'MIT License') {
        answersNew.push( { badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'});
    } else if (answers.license === 'Apache License 2.0') {
        answersNew.push( { badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'});
    } else if (answers.license === 'ISC License') {
        answersNew.push( { badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'});
    } else if (answers.license === 'GNU General Public License v3.0') {
        answersNew.push( { badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'});
    } else if (answers.license === 'Mozilla Public License 2.0') {
        answersNew.push( { badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'});
    } else if (answers.license === 'Boost Software License 1.0') {
        answersNew.push( { badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'});
    } else if (answers.license === 'The Unlicense') {
        answersNew.push( { badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'});
    };
};

// TODO: Create a function to initialize app
function init() {
    generateReadme();
};

// Function call to initialize app
// What is purpose of having init function here? When using terminal to initialize.
init();
