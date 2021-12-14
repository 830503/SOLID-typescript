import { Engine } from "./Engine";
import { MusicPlayer } from "./MusicPlayer";


export class Car {

    private _miles : number = 0;
    private _engine : Engine;
    private _musicPlayer : MusicPlayer;
   

    constructor(engine: Engine, musicPlayer: MusicPlayer){
        this._engine = engine;
        this._musicPlayer = musicPlayer;
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

    

    drive() {
        if(this._engine.engineStatus === false || this._engine.fuel.getFuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        
        this._engine.fuel.setFuel -= 1;
        this._miles += this._engine.fuelMileage;
    }

}