export class NoDiscount {
    constructor(value = 0) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a discount with a negative value');
        }
    }
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}
