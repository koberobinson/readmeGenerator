function licenseBade(license) {
    if (license === 'No License Required') {
        return ''
    } else if (license === 'MIT License') {
        return '![license: MIT](https://img.shields.io/badge/license-MIT-green)'
    } else if (license === 'GNU General Public License v3.0') {
        return '![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)'
    } else if (license === 'Apache License 2.0') {
        return '![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)'
    }
}

licenseBade()

function licenseLink(license) {
    if(license === 'No License Required') {
        return ''
    } else if (license === 'MIT License') {
        return '[MIT License](https://opensource.org/licenses/MIT)'
    } else if (license === 'GNU General Public License v3.0') {
        return '[GNU General Public License v3.0](https://opensource.org/licenses/GPL-2.0)'
    } else if (license === 'Apache License 2.0') {
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    }
}

licenseLink()



function generateMarkdown(data) {

    return `
    # ${data.title}
    
    ${licenseBade(data.license)}
    
    ## Table Of Contents
    - [description](#Description)
    - [installation](#Installation)
    - [usage](#Usage)
    - [contributions](#Contributions)
    - [questions](#Questions)
    - [license](#License)

    ## Description
    ${data.description}

    ## Installations
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contribution}

    ## Questions
    If you have any questions about the READ.ME Generator, please contact me either at (https://github.com${data.GitHub}) or email at ${data.email}

    ## License
    This application is covered under the ${licenseLink(data.license)}

    `
}

module.exports = generateMarkdown