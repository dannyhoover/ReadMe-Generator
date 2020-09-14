// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.tests}

## Licensing
${data.license}

### Contact Info
${data.githubUsername}
${data.email}
`;
}

module.exports = generateMarkdown;
