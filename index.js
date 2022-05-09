const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const teamData = [];

// Questions for all employee types
const standardQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Employee name: ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Please enter the employee's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee ID: ",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log("Please enter the employee's ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Please enter the employee's email.");
                return false;
            }
        }
    }
]

// Manager related prompts
const promptManager = () => {
    // Customize language in manager prompts since they appear without selection context
    let managerQuestions = [ 
        {
            type: 'input',
            name: 'name',
            message: "Manager name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager ID: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager office number: ',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ];
    
    return inquirer
        // Prompt the managerQuestions to the user
        .prompt(managerQuestions)
        // Pass in each of the prompt values to a function
        .then(({name, id, email, officeNumber}) => {
            // Create a new Manager object using the responses and add it to the teamData array
            teamData.push(new Manager(name, id, email, officeNumber))
        })
};

// Main Menu for navigation
const promptNavigation = () => {
    return inquirer
        // Question to direct creating additional team members or generating the file
        .prompt(
            {
                type: 'rawlist',
                name: 'navigation',
                message: 'Would you like to add a team member or generate your team profile?',
                choices: [
                    'Add an Engineer',
                    'Add an Intern',
                    'Generate Team Profile'
                ]
            }
        )
        // Take response and...
        .then(({navigation}) => {
            // Check if the user wants to Add an Engineer and launch the prompts for Engineers if so
            if (navigation === 'Add an Engineer') {
                return promptEngineer();
            }
            // Check if the user wants to Add an Intern and launch the prompts for Interns if so
            else if (navigation === 'Add an Intern') {
                return promptIntern();
            }
            // Check if the user wants to Generate Team Profile and return the finalized teamData array
            else if (navigation === 'Generate Team Profile') {
                return teamData;
            }
            // If something else manages to happen, ask for a valid selection
            else {
                console.log('Please select a valid option')
            }
        })
}

// Engineer related prompts
const promptEngineer = () => {
    // Duplicate the standard questions array so we don't impact it
    let engineerQuestions = [...standardQuestions];
    // Create an engineer specific question prompting for their github username to link to later on
    let githubQuestion = {
        type: 'input',
        name: 'github',
        message: 'Employee GitHub username: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log("Please enter the employee's GitHub username.");
                return false;
            }
        }
    }
    
    // Add the new github question to the copy of the standard questions
    engineerQuestions.push(githubQuestion);

    return inquirer
        // Prompt for engineer name, id, email, and github
        .prompt(engineerQuestions)
        // Pass in each of the prompt values to a function
        .then(({name, id, email, github}) => {
            // Create a new Engineer object using the responses and add it to the teamData array
            teamData.push(new Engineer(name, id, email, github))
            // Return to the Main Menu
            return promptNavigation();
        })
}

// Intern related prompts
const promptIntern = () => {
    // Duplicate the standard questions array so we don't impact it
    let internQuestions = [...standardQuestions];
    // Create an intern specific question prompting for their school
    let schoolQuestion = {
        type: 'input',
        name: 'school',
        message: 'Employee school: ',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            }
            else {
                console.log("Please enter the employee's school.");
                return false;
            }
        }
    }
    
    // Add the new school question to the copy of the standard questions
    internQuestions.push(schoolQuestion);

    return inquirer
        // Prompt for the intern name, id, email, and school
        .prompt(internQuestions)
        // Pass in each of the prompt values to a function
        .then(({name, id, email, school}) => {
            // Create a new Intern object using the responses and add it to the teamData array
            teamData.push(new Intern(name, id, email, school))
            // Return to the Main Menu
            return promptNavigation();
        })
}

// Function to write html file to the dist folder
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          return;
        }
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };



// Call to initialize the app
promptManager()
    .then(promptNavigation)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });

