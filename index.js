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
      roleChoice();
  });
}

const roleChoice = () => {
  return inquirer
  .prompt([
    {
      type: "list",
      name: "roleChoice",
      message: "What is your role?",
      choices: ["engineer","intern"],
    },
  ])
  .then((answer) => {
    console.log(answer);
    if (answer.roleChoice === "engineer"){
      addEngineer();
    } else if (answer.roleChoice === "intern") {
      addIntern();
    } else {
      addTeamMember();
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
      const engineer = new Engineer (answers.name, answers.Id, answers.email, answers.github);
      team.push(engineer);
      addTeamMember();
    }
  );
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
      addTeamMember();
    }
  );
}

function addTeamMember()  {
  console.log(team);
    
  fs.writeFileSync(path.join(__dirname, 'dist/index.html'),renderPage(team), 'utf-8');

  fs.writeFile('generatedIndex.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}
  
managerPrompts();

