const engineer = require("../lib/Engineer");
const manager = require("../lib/Manager");
const intern = require("../lib/Intern");
const generateHtml = require("./generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

const start = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "frontMan",
            },
            {
                type: "input",
                message: "What is the manager's ID?",
                name: "frontID",
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "frontEmail",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "frontOfficeNum",
            },
        ])
        .then((ans) => {
            const frontMan = new manager(
                ans.frontMan,
                ans.frontID,
                ans.frontEmail,
                ans.frontOfficeNum
            );
            console.log(frontMan);
            team.push(frontMan);
            console.log(team);
            addTeam();
        });
};

const addTeam = () => {
    inquirer
        .prompt([
            {
                name: "question",
                type: "list",
                choices: [
                    "Add an engineer",
                    "Add an intern",
                    "Finish building your team",
                ],
            },
        ])
        .then((answer) => {
            switch (answer.question) {
                case "Add an engineer":
                    console.log("Add your engineer!");
                    addEngineer();
                    break;

                case "Add an intern":
                    console.log("Add your intern!");
                    addIntern();
                    break;

                case "Finish building your team":
                    console.log("Finishing up!");
                    console.log(team);
                    finishTeam();
                    break;
            }
        });
};

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "engineerID",
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is the engineer's office github username?",
                name: "engineerGithub",
            },
        ])
        .then((response) => {
            const newEngineer = new engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGithub
            );
            console.log(newEngineer);
            team.push(newEngineer);
            console.log(team);
            addTeam();
        });
};

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "internID",
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "Where does the intern go to school?",
                name: "internGithub",
            },
        ])
        .then((response2) => {
            const newIntern = new intern(
                response2.internName,
                response2.internID,
                response2.internEmail,
                response2.internGithub
            );
            console.log(newIntern);
            team.push(newIntern);
            console.log(team);
            addTeam();
        });
};

const finishTeam = () => {
    fs.writeFile("../dist/index.html", generateHtml(team), (err) =>
        err
            ? console.error(err)
            : console.log("Your team page has been generated!")
    );
};

start();
