#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let randomNum = Math.round(Math.random() * 100);

let i = 0;
while (i < 3) {
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = (randomNum % 2 === 0) ? '"yes"' : '"no"';
  if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    i += 1;
    randomNum = Math.round(Math.random() * 100);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was ${isEven}.\nLet's try again, ${name}!`);
    break;
  }
}

if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
