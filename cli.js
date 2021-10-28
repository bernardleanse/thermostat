const Thermostat = require("./thermostat");
const thermostat = new Thermostat();
const readlineSync = require("readline-sync");

const maxReached = () => {
  if (thermostat.powerSavingMode == true && thermostat.temperature == 25) {
    return "(maximum reached)";
  } else if (
    thermostat.powerSavingMode == false &&
    thermostat.temperature == 32
  ) {
    return "(maximum reached)";
  } else {
    return "";
  }
};

do {
  console.log(`Temperature is ${thermostat.getTemperature()} ${maxReached()}`);
  command = readlineSync.question("Enter command ");
  switch (command) {
    case "up":
      thermostat.up();
      break;
    case "down":
      thermostat.down();
      break;
    case "psm off":
      thermostat.setPowerSavingMode(false);
      console.log("PSM is off");
      break;
    case "psm on":
      thermostat.setPowerSavingMode(true);
      console.log("PSM is on");
      break;
    default:
      break;
  }
} while (true);
