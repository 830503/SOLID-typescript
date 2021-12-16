// interface RestaurantInterface {
//     _name: string;
//     _instrument: InstrumentInterface;
//     cook(item: string): void;
// }
let ht = document.getElementById('target');
class Oven {
    turnOn() {
        this._isOn = true;
        setTimeout(function() {
            ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function() {
                ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
    turnOff() {
        setTimeout(function() {
            ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
}
class Stove {
    turnOn() {
        setTimeout(function() {
            ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    turnOff() {
        setTimeout(function() {
            ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    bake(item1) {
        if (this._isOn) {
            setTimeout(function() {
                ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item1 + " !</p>";
            }, 2000);
            console.log("Now baking " + item1 + "!");
        } else {
            setTimeout(function() {
                ht.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
}
class Restaurant {
    constructor(name, instrument){
        this._name = name;
        this._instrument = instrument;
    }
    cook(item2) {
        this._instrument.turnOn();
        this._instrument.bake(item2);
        this._instrument.turnOff();
    }
}
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
let bakery = new Restaurant("Bakery", new Oven());
bakery.cook("cookies");
let crepery = new Restaurant("Crepery", new Stove());
crepery.cook("crepes");

//# sourceMappingURL=index.20f1ac4c.js.map
