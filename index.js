const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];
const renderPage = require("./src/teamGenerator");;

const managerPrompts = () => {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the managers Id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers Office number?",
    },
  ])
  .then((answers) => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber);
      team.push(manager);
      roleChoice()
  });
}

const roleChoice = () => {
  return inquirer
  .prompt([
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: ["engineer","intern"],
    },
  ])
  .then((answer) => {
    console.log(answer);
    if (answer.userChoice === "engineer"){
      addEngineer();
    } else if (answer.userchoice === "intern") {
      addIntern();
    }
  })
}

const addEngineer = () => {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your Id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer (answers.name, answers.Id, answers.email, answers.officeNumber);
      team.push(engineer);
  });
}


const addIntern = () => {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your Id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "schoolName",
      message: "What is your school name?",
    },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern (answers.name, answers.Id, answers.email, answers.school);
      team.push(intern);
  });
}


  

/* const htmlPageContent = generateHTML(answers);

    fs.writeFile('generatedIndex.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
 */