const Manager= require("./lib/Manager");
const Employee=require("./lib/Employee");
const Intern=require("./lib/Intern");
const Engineer=require("./lib/Engineer");

const inquirer=require("inquirer");
 const fs= require('fs');
 const {managerQuestions, internQuestions, engineerQuestions, employeeQuestions} = require("./questions");
 const generateHtml = require('./src/generateHTML')
menu=()=> {
createManager= async () =>{
    const answers= await inquirer.prompt(managerQuestions);
    console.log(answers);
    const manager=new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
console.log(manager);
};
createManager();
};
menu();


menu=()=> {
createEmployee=async ()=>{
     const answers=await inquirer.prompt(employeeQuestions);
     console.log(answers);
     const employee=new Employee(answers.name,answers.id, answers.email,);
     console.log(employee);
 };
 createEmployee();
};
 menu();

menu=()=> {
 createIntern= async () =>{
    const answers= await inquirer.prompt(internQuestions);
    console.log(answers);
    const intern=new Intern(answers.name, answers.id, answers.email,answers.school);
console.log(intern);
};
createIntern();
};
menu();

menu=()=> {
createEngineer= async () =>{
    const answers= await inquirer.prompt(engineerQuestions);
    console.log(answers);
    const engineer=new Engineer(answers.github);
console.log(engineer);
};
createEngineer();
};

menu();
