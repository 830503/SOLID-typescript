export class ShoppingBasket {
    constructor() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}
