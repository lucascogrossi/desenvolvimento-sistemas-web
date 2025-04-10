import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Cliente{
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : number;
    private _endereco : Endereco;
    private _telefones : Telefone[] = [];

    constructor(nome : string, cpf : number, data_nascimento : number, endereco : Endereco, telefones : Telefone[]) {
        this._nome = nome;
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._endereco = endereco;
        this._telefones = telefones;
    }

    get nome() : string {
        return this._nome;
    }

    set nome(nome : string) {
        this._nome = nome;
    }

    get cpf() : number {
        return this._cpf;
    }

    set cpf(cpf : number) {
        this._cpf = cpf;
    }

    get data_nascimento() : number {
        return this._data_nascimento;
    }

    set data_nascimento(data_nascimento : number) {
        this._data_nascimento = data_nascimento;
    }

    get endereco() : Endereco {
        return this._endereco;
    }

    set endereco(endereco : Endereco) {
        this._endereco = endereco;
    }

    get telefones() : Telefone[] {
        return this._telefones;
    }

    set telefones(telefones : Telefone[]) {
        this._telefones = telefones;
    }
}

