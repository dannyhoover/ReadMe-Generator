const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function(err) {
    if  (err) {
      console.error(err);
    }
  })
}

// function to initialize program
async function init() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "editor",
      name: "description",
      message: "Describe your project."
    },
    {
      type: "editor",
      name: "installation",
      message: "How do you install your project?"
    },
    {
      type: "editor",
      name: "usage",
      message: "How do you use your project?"
    },
    {
      type: "editor",
      name: "contribution",
      message: "How would one contribute to your project?"
    },
    {
      type: "editor",
      name: "tests",
      message: "How do you test your project?"
    },
    {
      type: "list",
      name: "license",
      message: "What is your project licensed under?",
      choices: [
        "MIT",
        "ISC"
      ]
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
  ]);

  writeToFile("ReadMe.md", generateMarkdown(answers));
}

// function call to initialize program
init().catch(err => { console.log(err) });
