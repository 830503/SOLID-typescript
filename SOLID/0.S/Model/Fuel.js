export class Fuel {
    constructor(MAXIMUM_FUEL_CAPACITY, fuel, FUEL_MILEAGE) {
        this._fuel = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._fuel = fuel;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }
    get fuel() {
        return this._fuel;
    }
    set fuel(value) {
        this._fuel = value;
    }
    get fuelMileage() {
        return this.FUEL_MILEAGE;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}
