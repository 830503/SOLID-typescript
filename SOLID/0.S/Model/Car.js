export class Car {
    constructor(engine, musicPlayer, fuel) {
        this._miles = 0;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
        this._fuel = fuel;
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
    get fuel() {
        return this._fuel;
    }
    drive() {
        if (this._engine.engineStatus === false || this.fuel.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this.fuel.fuel -= 1;
        this._miles += this.fuel.fuelMileage;
    }
}
