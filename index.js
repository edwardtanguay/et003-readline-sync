import readlineSync from 'readline-sync';

const userName = readlineSync.question('What is your name? ');
const bornYear = readlineSync.question('In which year were you born? ');
const bornCity = readlineSync.question('In which city were you born? ');
const currentCity = readlineSync.question('Where do you live now? ');
const currentYear = readlineSync.question('What is the current year? ');

const currentYearNum = Number(currentYear);
const bornYearNum = Number(bornYear);
const agoYears = currentYearNum - bornYearNum; 

console.log(`Hello! My name is ${userName}. I was born ${agoYears} years ago in ${bornCity}. Now I live in ${currentCity}.`);