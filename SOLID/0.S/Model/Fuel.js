"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
var Fuel = /** @class */ (function () {
    function Fuel(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Fuel.prototype, "getFuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fuel.prototype, "setFuel", {
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Fuel.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    return Fuel;
}());
exports.Fuel = Fuel;
