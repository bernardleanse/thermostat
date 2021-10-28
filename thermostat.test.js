const Thermostat = require("./thermostat");

describe(Thermostat, () => {
  beforeEach(() => {
    this.thermostat = new Thermostat();
  });
  describe("#getTemperature", () => {
    it("gets the temperature", () => {
      expect(this.thermostat.getTemperature()).toBe(20);
    });
  });
  describe("#up", () => {
    it("raises the temperature", () => {
      this.thermostat.up();
      this.thermostat.up();
      expect(this.thermostat.getTemperature()).toBe(22);
    });
  });
  describe("#down", () => {
    it("lowers the temperature", () => {
      this.thermostat.down();
      expect(this.thermostat.getTemperature()).toBe(19);
    });
  });
  describe("#setPowerSavingMode", () => {
    it("when true temperature is capped at 25", () => {
      for (i = 0; i < 10; i++) {
        this.thermostat.up();
      }
      expect(this.thermostat.getTemperature()).toBe(25);
    });
    it("when false temperature is capped at 32", () => {
      this.thermostat.setPowerSavingMode(false);
      for (i = 0; i < 40; i++) {
        this.thermostat.up();
      }
      expect(this.thermostat.getTemperature()).toBe(32);
    });
  });
  describe("#reset", () => {
    it("resets the temperature", () => {
      this.thermostat.up();
      this.thermostat.reset();
      expect(this.thermostat.getTemperature()).toBe(20);
    });
  });
  describe("#getEnergyUsage", () => {
    it("returns low-usage when temperature is below 18", () => {
      this.thermostat.temperature = 17;
      expect(this.thermostat.getEnergyUsage()).toBe("Low-usage");
    });
    it("returns medium-usage if temperature is between 18 and 25", () => {
      this.thermostat.temperature = 22;
      expect(this.thermostat.getEnergyUsage()).toBe("Medium-usage");
    });
    it("returns high-usage if temperature is above 25", () => {
      this.thermostat.temperature = 28;
      expect(this.thermostat.getEnergyUsage()).toBe("High-usage");
    });
  });
  xdescribe("", () => {
    it("", () => {});
  });
});
