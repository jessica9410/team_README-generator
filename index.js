const Manager= require("./lib/Manager");
const Employee=require("./lib/Employee");
const Intern=require("./lib/Intern");
const Engineer=require("./lib/Engineer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

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
    members.push(intern);

    options()
};

const createEngineer= async () =>{
    const answers= await inquirer.prompt(engineerQuestions);
    console.log(answers);
    const engineer=new Engineer(answers.name, answers.id, answers.email, answers.github);
    members.push(engineer);

    options();
};

const createMembersCard = (members) => {
  let cards = '';

  for(var i=0; i< members.length; i++){
    console.log(members[i]);

    cards = cards + `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${members[i].getName()} <br/>
   <i class="fas fa-user-graduate"></i>${members[i].getRole()}</div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${members[i].getId()}</li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:eric@gmail.com">${members[i].getEmail()}</a></span></li>
    </ul>
  </div>`

  }

  return cards;
  
}

const render=  (members) =>{
  
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="../dist/style.css" />
      <title>Team Profile Generator</title>
  </head>
  <body>
      <header>
      <h1> My Team</h1>
      </header>
  
      <main>  

           ${createMembersCard(members)}
          
      </main>
       
  </body>
  </html>`
  
}

const createTeam= async () =>{
  console.log(members);
 if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
  fs.writeFileSync(outputPath, render(members), "utf-8");
  
}

const options = async () => {
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
  ])

console.log(answers);
switch(answers.memberChoice){
    case "Engineer":
       createEngineer();
        break;
    case "Intern":
        createIntern();
        break;
    default:
        createTeam();
  }
}

 const init= async ()=>{
     
    await createManager()
    options();
 }

 init();
 