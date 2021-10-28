const readlineSync = require('readline-sync')
answer = readlineSync.question('What is your name? ')
console.log(`Welcome ${answer}`)