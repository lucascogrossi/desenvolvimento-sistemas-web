"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, data_nascimento, endereco, telefones) {
        this._telefones = [];
        this._nome = nome;
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._endereco = endereco;
        this._telefones = telefones;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "data_nascimento", {
        get: function () {
            return this._data_nascimento;
        },
        set: function (data_nascimento) {
            this._data_nascimento = data_nascimento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (endereco) {
            this._endereco = endereco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "telefones", {
        get: function () {
            return this._telefones;
        },
        set: function (telefones) {
            this._telefones = telefones;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
