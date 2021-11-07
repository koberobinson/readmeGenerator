const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title for your project ?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description for your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to use your project ?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps to use your project ?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Did anyone else contribute in this project ?'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select one of the following licenses',
            choices: 
            [
                "MIT License",
                "GNU General Public License v3.0",
                "Apache License 2.0",
                "No License Required"
            ]
        }
    ])
}

const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log("README.md succesfully created"))
    .catch((err) => console.error(err))
}

init()