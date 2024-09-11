class GerenciadorProdutos{
    static produtos = [];

    static adicionarProduto(produto){
        this.produtos.push(produto)
        console.log('Produto adicionado:', produto.nome );

    }

    static removerProdutos(produto){
        this.produtos = this.produtos.filter(u => u.nome !== produto.nome);
        console.log(`Produto excluido: ${usuario.nome}`);
    }

    static listarProdutos(){
        if(this.produtos.length === 0){
            console.log('Nenhum produto cadastrado.');
        } else {
            console.log('Lista de produtos cadastrados');

            this.produtos.forEach(
                usuario => {
                    console.log(produto.toString());
                }
            );
        }
    }
    
    static encontrarProduto(nome){
        const produto = this.produto.find(u => u.nome === nome);

        if(produto){
            console.log(produto.toString())
            return produto;
        } else {
            console.log('Produto não encontrado');
            return null;
        }
    }
    static obterProdutos(){
        return this.produtos;
    }
}
module.exports = GerenciadorProdutos;