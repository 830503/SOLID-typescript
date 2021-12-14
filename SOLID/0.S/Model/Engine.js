export class Engine {
    constructor(fuel) {
        this._engineStatus = false;
        this.FUEL_MILEAGE = 10;
        this._fuel = fuel;
    }
    get fuel() {
        return this._fuel;
    }
    get engineStatus() {
        return this._engineStatus;
    }
    get fuelMileage() {
        return this.FUEL_MILEAGE;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }
    turnEngineOff() {
        this._engineStatus = false;
    }
}
