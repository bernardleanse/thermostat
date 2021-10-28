const Thermostat = require("./thermostat");
const thermostat = new Thermostat;
const readlineSync = require('readline-sync')



do {
  console.log(`Temperature is ${thermostat.getTemperature()}`)
  command = readlineSync.question('Enter command ')
  switch(command) {
    case 'up':
      thermostat.up()
      break;
    case 'down':
      thermostat.down()
      break;
    default:
      break;
  } 
} while(true)

