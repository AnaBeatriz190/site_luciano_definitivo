class Produto {
    constructor(vendedor, nomeproduto, preco){
        this.vendedor = vendedor;
        this.nomeproduto = nomeproduto;
        this.preco = preco;
    }

    toString(){
        return `Produto: Vendedor: ${this.vendedor}, Produto: ${this.nomeproduto}, Preço: ${this.preco}}`;
    }
}

module.exports = Produto;