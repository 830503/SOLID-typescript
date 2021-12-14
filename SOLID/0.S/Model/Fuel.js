export class Fuel {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get getFuel() {
        return this._fuel;
    }
    set setFuel(value) {
        this._fuel = value;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}
