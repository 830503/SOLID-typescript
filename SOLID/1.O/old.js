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
    makeSound(animal) {
        return 'Woef';
    }
}
class Cat {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'cat';
    }
    makeSound(animal) {
        return 'Miaw';
    }
}
class Parrot {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'parrot';
    }
    makeSound(animal) {
        return 'I am a pirate';
    }
}
class Bear {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'bear';
    }
    makeSound(animal) {
        return 'Growl';
    }
}
class Zoo {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(animal) {
        this._animals.push(animal);
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
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});
