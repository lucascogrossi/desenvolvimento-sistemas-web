"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Venda = /** @class */ (function () {
    function Venda(codigo, data, cliente, produtos) {
        this._produtos = [];
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }
    Object.defineProperty(Venda.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        set: function (codigo) {
            this._codigo = codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venda.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venda.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (cliente) {
            this._cliente = cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venda.prototype, "produtos", {
        get: function () {
            return this._produtos;
        },
        set: function (produtos) {
            this._produtos = produtos;
        },
        enumerable: false,
        configurable: true
    });
    Venda.prototype.calcularTotal = function () {
        var total = 0;
        for (var i = 0; i < this._produtos.length; i++) {
            total += this._produtos[i].valor;
        }
        return total;
    };
    return Venda;
}());
exports.default = Venda;
