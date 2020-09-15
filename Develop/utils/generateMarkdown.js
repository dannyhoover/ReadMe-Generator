const licenseChoice1 = "![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)";
const licenseChoice2 = "![ISC License](https://img.shields.io/badge/license-ISC-blue)";

const licenseExp1 = `
MIT License

Copyright(c)[2020][Danny Hoover]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`

const licenseExp2 = `
ISC License

Copyright (c) 2020, Danny Hoover

Permission to use, copy, modify, and/or distribute this software for
any purpose with or without fee is hereby granted, provided that the 
above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR 
ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`
function getLicense (data) {
  if (data.license === "MIT") {
    let licenseShield = licenseChoice1;
    let licenseExplain = licenseExp1;
  }
  else {
    let licenseShield = licenseChoice2;
    let licenseExplain = licenseExp2;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  getLicense();
  return `${data.licenseShield}
# ${data.title}

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
${licenseShield}
${data.license}
${licenseExplain}

### Further Questions? Contact Me:
${data.githubUsername}
${data.email}
`;
}

module.exports = generateMarkdown;
