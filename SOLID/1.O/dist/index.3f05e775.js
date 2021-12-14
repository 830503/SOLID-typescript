class Dog {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'dog';
    }
    makeSound(animal5) {
        return 'Woef';
    }
}
class Cat {
    set name(value1) {
        this._name = value1;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'cat';
    }
    makeSound(animal1) {
        return 'Miaw';
    }
}
class Parrot {
    set name(value2) {
        this._name = value2;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'parrot';
    }
    makeSound(animal2) {
        return 'I am a pirate';
    }
}
class Bear {
    set name(value3) {
        this._name = value3;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'bear';
    }
    makeSound(animal3) {
        return 'Growl';
    }
}
class Zoo {
    constructor(){
        this._animals = new Array();
    }
    addAnimal(animal4) {
        this._animals.push(animal4);
    }
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Bear);
zoo.animals.forEach((animal)=>{
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.makeSound(animal) + "<br>";
});

//# sourceMappingURL=index.3f05e775.js.map
