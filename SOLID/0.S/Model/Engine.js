"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(fuel) {
        this._engineStatus = false;
        this.FUEL_MILEAGE = 10;
        this._fuel = fuel;
    }
    Object.defineProperty(Engine.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "fuelMileage", {
        get: function () {
            return this.FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
exports.Engine = Engine;
