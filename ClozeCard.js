var inquirer = require('inquirer');
var BasicCards = require('./BasicCards.js');




function Cloze(answer, guess) {


  // var blank = cloze.split('').map(function(letter) {
  //   return letter = '_';
  // }).join('');

  // // var re = new RegExp(cloze, 'g');
  // this.message = answer.replace(re, blank);
  // this.name = answer;

  //
  // this.getFront = function() {
  //   console.log(this.guess);
  // };
  //
  // this.getBack = function() {
  //   console.log(this.answer);
  // };
}

//
// console.log(quiz_answers);


// var question1 = new Cloze('The sky is blue and is awesome', 'blue');
// question1.getFront();
// question1.getBack();
// var answer = "The sky is blue and awesome";
// var cloze = "blue";
// var blank = cloze.split("").map(function() {
//   return letter = "_";
// }).join("");
//
// console.log(answer.indexOf(cloze));
// var cloze_index = answer.indexOf(cloze);






function Question(question, answer) {
  this.question = question;
  this.answer = answer;
}

var answers = [
  {
    answer: 'The sky is blue and is awesome',
    cloze: 'blue'
  },
  {
    answer: 'A cat meows and a dog barks',
    cloze: '10'
  }
];

var quiz_answers = [];

answers.forEach(function(answer) {
  quiz_answers.push(new Cloze(answer.answer, answer.cloze));
});
