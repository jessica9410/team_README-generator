const Manager= require("./lib/Manager");
const Employee=require("./lib/Employee");
const Intern=require("./lib/Intern");
const Engineer=require("./lib/Engineer");



const inquirer=require("inquirer");
 const fs= require('fs');
 const {managerQuestions, internQuestions, engineerQuestions, employeeQuestions} = require("./questions");
//  const generateHtml = require('./src/generateHTML')


const members=[];

const createManager= async () =>{
    const answers= await inquirer.prompt(managerQuestions);
    console.log(answers);
    const manager=new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
members.push(manager);
};

 const createIntern= async () =>{
    const answers= await inquirer.prompt(internQuestions);
    console.log(answers);
    const intern=new Intern(answers.name, answers.id, answers.email,answers.school);
console.log(intern);
};

const createEngineer= async () =>{
    const answers= await inquirer.prompt(engineerQuestions);
    console.log(answers);
    const engineer=new Engineer(answers.name, answers.id, answers.email, answers.github);
console.log(engineer);
};
 const init= async ()=>{
     
await createManager()
const answers= await inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members"
      ]
    }
  ]);
  console.log(answers);
switch(answers.memberChoice){
    case "Engineer":
       createEngineer();
        break;
        case "Intern":
            createIntern();
            break;
            default:
                // createHtml();
}

 }

 init();


