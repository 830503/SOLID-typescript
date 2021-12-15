export class Fuel{
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private _fuel : number = 0;
    private readonly FUEL_MILEAGE: number = 10;


    constructor(MAXIMUM_FUEL_CAPACITY: number, fuel: number, FUEL_MILEAGE: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._fuel = fuel;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }

    get fuel(): number {
        return this._fuel;
    }

    set fuel(value: number) {
        this._fuel = value;
    }

    get fuelMileage() {
        return this.FUEL_MILEAGE;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }


}