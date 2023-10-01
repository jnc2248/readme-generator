const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];
const writeToFile = ({ title, description, installation, usage, license, fullName, contributing, tests, github, email, questions }) =>
`
# ${title}

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

This application is covered under the ${license} - ${fullName}. Please refer to LICENSE.md for more details.

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questions}

Please refer to my [GitHub profile](https://github.com/${github}). If you have any additional questions, you can reach me at ${email}.

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
        // .then((response) => {
        //     if (response.license === 'MIT License') {
        //         console.log('MIT License chosen');
        //     } else if (response.license === 'Apache License 2.0') {
        //         console.log('Apache License 2.0');
        //     } else if (response.license === 'ISC License') {
        //         console.log('ISC License');
        //     }
        // })
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
            // {
            //     type: 'input',
            //     name: 'questions',
            //     message: ''
            // },
        ])
        .then((answers) => {
            const readmeTemplate = writeToFile(answers);

            fs.writeFile('README.md', readmeTemplate, (err) =>
                (err) ? console.error(err) : console.log("Successfully generated README!")
            );
        });
};

// function generateReadme () {
//     inquirer
//         .prompt ([
//             {
//                 type: 'input',
//                 name: 'fullName',
//                 message: 'Hello! What is your name?',
//             },
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'What is your Github username?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is your email address?',
//             },
//             {
//                 type: 'input',
//                 name: 'title',
//                 message: 'What is the title of this project?',
//             },
//             {
//                 type: 'input',
//                 name: 'description',
//                 message: 'Please enter a description of the project:',
//             },
//             {
//                 type: 'input',
//                 name: 'installation',
//                 message: 'Please enter installation instructions:',
//             },
//             {
//                 type: 'input',
//                 name: 'usage',
//                 message: 'Please enter usage instructions:',
//             },
//             {
//                 type: 'list',
//                 name: 'license',
//                 message: 'Please select the license you intend to use from the choices below:',
//                 choices: ['MIT License', 'Apache License 2.0', 'ISC License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense']
//             },
//             {
//                 type: 'input',
//                 name: 'contributions',
//                 message: 'Please enter contribution guidelines:'
//             },
//             {
//                 type: 'input',
//                 name: 'tests',
//                 message: 'Please enter testing instructions:'
//             },
//             // {
//             //     type: 'input',
//             //     name: 'questions',
//             //     message: ''
//             // },
//             // {
//             //     type:
//             //     name:
//             //     message:
//             // },
//         ])
//         .then((answers) => {
//             const readmeTemplate = writeToFile(answers);

//             fs.writeFile('README.md', readmeTemplate, (err) =>
//                 (err) ? console.error(err) : console.log("Successfully generated README!")
//             );
//         });
// };

// TODO: Create a function to initialize app
function init() {
    generateReadme();
};

// Function call to initialize app
init();
