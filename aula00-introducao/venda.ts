import Cliente from "./cliente";
import Produto from "./produto";

export default class Venda {
    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produtos : Produto[];
    
    constructor(codigo : number, data : number, cliente : Cliente) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;

    }

    get codigo() : number {
        return this._codigo;
    }

    set codigo(codigo : number) {
        this._codigo = codigo;
    }

    get data() : number {
        return this._data;
    }

    set data(data : number) {
        this._data = data;
    }

    get cliente() : Cliente {
        return this._cliente;
    }

    set cliente(cliente : Cliente) {
        this._cliente = cliente;
    }

    get produtos() : Produto[] {
        return this._produtos;
    }

    set produtos(produtos : Produto[]) {
        this._produtos = produtos;
    }
}