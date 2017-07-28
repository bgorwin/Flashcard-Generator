var inquirer = require('inquirer');
var clozeCards = require('./ClozeCard.js');
// var Clonz = require('./ClozeCard.js');
// console.log("basicCards connected");

function start() {
  inquirer.prompt ([
    {
      type: "list",
      message: "Which choice of cards would you like?",
      choices: ["Basic Cards", "Cloze Cards"],
      name: "startPrompt"
    }

  ]).then(function(answer) {
    if (answer.startPrompt === "Basic Cards"){
      firstPresident();
    } else {
      Cloze();
    }
  });
}


function firstPresident() {

  inquirer.prompt ([
    {
      type: "input",
      message: "Who was the first president of the United States?",
      name: "president"
    }

  ]).then(function(inquirerResponse) {
    if (inquirerResponse.president === "George Washington"){
      console.log("Correct!");
      coffeeQuestion();
    } else {
      console.log("The correct answer is George Washington.");
      coffeeQuestion();
    }
 });
}


function coffeeQuestion() {

  inquirer.prompt ([
    {
      type: "input",
      message: "What is the most popular caffine drink in the morning?",
      name: "coffee"
    }

  ]).then(function(inquirerResponse) {
    if (inquirerResponse.coffee === "coffee"){
      console.log("Correct!");
      nikonQuestion();
    } else {
      console.log("The correct answer is coffee.");
      nikonQuestion();
    }
 });
}

function nikonQuestion() {

  inquirer.prompt ([
    {
      type: "input",
      message: "What is the popular camera brand that starts with an N?",
      name: "nikon"
    }

  ]).then(function(inquirerResponse) {
    if (inquirerResponse.nikon === "nikon"){
      console.log("Correct!");
      iphoneQuestion();
    } else {
      console.log("The correct answer is nikon.");
      iphoneQuestion();
    }
 });
}

function iphoneQuestion() {

  inquirer.prompt ([
    {
      type: "input",
      message: "What is the best smart phone?",
      name: "smartPhone"
    }

  ]).then(function(inquirerResponse) {
    if (inquirerResponse.smartPhone === "iPhone"){
      console.log("Correct!" );
      trumpQuestion();
    } else {
      console.log("The correct answer is iPhone");
      trumpQuestion();
    }
 });
}


function trumpQuestion() {

  inquirer.prompt ([
    {
      type: "input",
      message: "What is the name of the current orange President?",
      name: "trump"
    }

  ]).then(function(inquirerResponse) {
    if (inquirerResponse.trump === "Trump"){
      console.log("Unfortunately True" );
      start();
    } else {
      console.log("The correct answer unfortunately is Trump");
      start();
    }
 });
}

start();
