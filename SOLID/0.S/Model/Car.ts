import { Engine } from "./Engine";
import { MusicPlayer } from "./MusicPlayer";
import { Fuel } from "./Fuel";

export class Car {
    private _engine : Engine;
    private _musicPlayer : MusicPlayer;
    private _fuel: Fuel;
    private _miles : number = 0;

    constructor(engine: Engine, musicPlayer: MusicPlayer, fuel: Fuel){
        this._engine = engine;
        this._musicPlayer = musicPlayer;
        this._fuel = fuel;
    }

    get miles(): number {
        return this._miles;
    }

    get engine(): Engine {
        return this._engine;
    }
    
    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get fuel(): Fuel {
        return this._fuel;
    }
    

    drive() {
        if(this._engine.engineStatus === false || this.fuel.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        
        this.fuel.fuel -= 1;
        this._miles += this.fuel.fuelMileage;
    }

}