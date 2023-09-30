const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];
const writeToFile = ({ title, description }) =>
`
# ${title}


## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [License](#license)

5. [Contributions](#contributions)

6. [Tests] (#test)

7. [Questions] (#questions)


## Description

${description}


## Installation


## Usage


## License


## Contributions


## Tests


## Questions


`

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of the project.',
        },
        // {
        //     type: 
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
        // {
        //     type:
        //     name:
        //     message:
        // },
    ])
    .then((answers) => {
        const readmeTemplate = writeToFile(answers);

        fs.writeFile('README.md', readmeTemplate, (err) =>
            (err) ? console.error(err) : console.log("Successfully generated README!")
        );
    });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
