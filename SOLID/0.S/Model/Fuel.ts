export class Fuel{
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private _fuel : number = 0;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get getFuel(): number {
        return this._fuel;
    }

    set setFuel(value: number) {
        this._fuel = value;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }


}