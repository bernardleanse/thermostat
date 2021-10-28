class Thermostat {
  constructor(){
    this.temperature = 20
    this.powerSavingMode = false
  }
  getTemperature() {
    return this.temperature
  }
  up() {
    if(this.powerSavingMode = true && this.temperature < 25){
      this.temperature += 1
    }
    else if(this.powerSavingMode = false) {
      this.temperature += 1
    }   
  }
  down() {
    this.temperature -= 1
  }
  setPowerSavingMode(bool) {
    if(bool == true){
      this.powerSavingMode = true
    }
    else if(bool == false) {
      this.powerSavingMode = false
    }
  }
}   

module.exports = Thermostat