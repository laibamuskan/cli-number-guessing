#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *10 +1);

const answers = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10"
    }, 
]);
if (answers .userGuessNumber === randomNumber){
console.log("congratulation you guess right number")
}else {
    console.log("you guess wrong number")
}
