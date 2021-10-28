const Thermostat = require('./thermostat')

describe(Thermostat, () => {
  beforeEach(() => {
    this.thermostat = new Thermostat();
  });
  describe('#getTemperature', () => {
    it('gets the temperature', () => {
      expect(this.thermostat.getTemperature()).toBe(20);
    });
  });
  describe('#up', () => {
    it('raises the temperature', () => {
      this.thermostat.up()
      this.thermostat.up()
      expect(this.thermostat.getTemperature()).toBe(22);
    });
  });
  describe('#down', () => {
    it('lowers the temperature', () => {
      this.thermostat.down()
      expect(this.thermostat.getTemperature()).toBe(19)
    });
  });
  describe('#setPowerSavingMode', () => {
    it('when true temperature is capped at 25', () => {
      for(i = 0; i < 10; i++) {
        this.thermostat.up()
      }
      this.thermostat.setPowerSavingMode(true)
      expect(this.thermostat.getTemperature()).toBe(25)
    });
  });
  xdescribe('', () => {
    it('', () => {});
  });
});