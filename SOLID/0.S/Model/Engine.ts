export class Engine {
    private _engineStatus: boolean = false;
    private readonly FUEL_MILEAGE;
    
    constructor(FUEL_MILEAGE: number) {
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }

    get engineStatus(): boolean {
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