export class Car {
    constructor(engine, musicPlayer) {
        this._miles = 0;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
    }
    get miles() {
        return this._miles;
    }
    get engine() {
        return this._engine;
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    drive() {
        if (this._engine.engineStatus === false || this._engine.fuel.getFuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._engine.fuel.setFuel -= 1;
        this._miles += this._engine.fuelMileage;
    }
}
