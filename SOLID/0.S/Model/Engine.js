export class Engine {
    constructor(FUEL_MILEAGE) {
        this._engineStatus = false;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
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
