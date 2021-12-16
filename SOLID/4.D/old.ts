interface InstrumentInterface {
    turnOn(): void;
    turnOff(): void;
    bake(item: string): any;
}

let ht = <HTMLElement>document.getElementById('target');

class Oven implements InstrumentInterface {
    private _isOn: boolean;

    public turnOn(): void
    {
        if(this._isOn = true){
            setTimeout(function (){
                ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
            }, 1000);
            console.log("THE GAS IS ON!"); //insert fart humor here
        }
    }

    public bake(item: string)
    {
        if(this._isOn) {
            setTimeout(function (){
                ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }

    }

    public turnOff(): void
    {
        setTimeout(function (){
            ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
}

class Stove implements InstrumentInterface{
    private _isOn: boolean;

    public turnOn(): void
    {
        setTimeout(function (){
            ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff(): void
    {
        setTimeout(function (){
            ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item: string)
    {
        if(this._isOn) {
            setTimeout(function (){
                ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                ht.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

class Restaurant{
    _name: string;
    _instrument: InstrumentInterface;

    constructor(name: string, instrument: InstrumentInterface) {
        this._name = name;
        this._instrument = instrument;
    }

    public cook(item: string){
        this._instrument.turnOn();
        this._instrument.bake(item);
        this._instrument.turnOff();
    }
}

let bakery = new Restaurant("Bakery", new Oven());
bakery.cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.cook("crepes");
 
