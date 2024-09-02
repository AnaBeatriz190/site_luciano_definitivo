class GerenciadorUsuarios{
    static usuarios = [];

    static adicionarUsuario(usuario){
        this.usuarios.push(usuario)
        console.log('Usuário adicionado:', usuario.nome );

    }

    static removerUsuario(usuario){
        this.usuarios = this.usuarios.filter(u => u.email !== usuario.email);
        console.log('Usuário excluido: ${usuario.nome}');
    }

    static listarUsuario(){
        if(this.usuarios.length === 0){
            console.log('Nenhum usuário cadastrado.');
        } else {
            console.log('Lista de usuários cadastrados');

            theis.usuarios.forEach(
                usuario => {
                    console.log(usuario.toString());
                }
            );
        }
    }
    
    static encontrarUsuarioEmail(email){
        const usuario = this.usuario.find(u => u.email === email);

        if(usuario){
            console.log(usuario.toString())
            return usuario;
        } else {
            console.log('Usuário não encontrado');
            return null;
        }
    }

    static validarLoginSenha(email, senha){

        if(!email || !senha){
            return{
                valid: false,
                message: 'Login e senha precisam ser informados.'
            };
        } 

        for(let usuario of this.usuarios){
            if(usuario.email === email
                && usuario.senha === senha){
                    return{
                        valid: true,
                        message: 'Logado com sucesso'
                    };                
            }

        }
        return{
            valid: false,
            message:'E-mail ou senha incorretos.'
        };
    }

    static obterUsuarios(){
        return this.usuarios;
    }
}



module.exports = GerenciadorUsuarios;