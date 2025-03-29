import Cliente from "./cliente";
import Produto from "./produto";
import Venda from "./venda";
import Endereco from "./endereco";
import Telefone from "./telefone";

let endereco1 = new Endereco("Rua Teste", 123, "Cidade", "Estado");

let telefone1 = new Telefone("(00)", 900000000, "Celular");
let telefone2 = new Telefone("(00)", 900000000, "Fixo");
let telefones = [telefone1, telefone2];

let cliente1 = new Cliente("Fulano de Tal", 12345678910, 10101990, endereco1, telefones);

let produto1 = new Produto(10, "Descricao do produto 1", 99.99)
let produto2 = new Produto(20, "Descricao do produto 2", 25.90)
let produtos = [produto1, produto2]

let venda1 = new Venda(1, 29032025, cliente1, produtos)

console.log(venda1)






