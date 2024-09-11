class Usuario {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    toString(){
        return `Usuário: Nome: ${this.nome}, E-mail: ${this.email}}`;
    }
}

module.exports = Usuario;