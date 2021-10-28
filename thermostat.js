class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if (
      (this.powerSavingMode == true && this.temperature < 25) ||
      (this.powerSavingMode == false && this.temperature < 32)
    ) {
      this.temperature += 1;
    }
  }
  down() {
    this.temperature -= 1;
  }
  setPowerSavingMode(bool) {
    if (bool == true) {
      this.powerSavingMode = true;
    } else if (bool == false) {
      this.powerSavingMode = false;
    }
  }
  reset() {
    this.temperature = 20;
  }
  getEnergyUsage() {
    if (this.temperature < 18) {
      return "Low-usage";
    } else if (this.temperature <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    }
  }
}

module.exports = Thermostat;
