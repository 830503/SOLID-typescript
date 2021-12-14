export class Product {
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
