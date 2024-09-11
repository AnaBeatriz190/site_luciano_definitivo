const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

const Usuario = require('./scripts/usuario')
const GerenciadorUsuarios = require('./scripts/gerenciadorUsuarios');
const GerenciadorProdutos = require('./scripts/gerenciarProdutos');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    fs.readFile(path.join(__dirname, "/public/pages/login.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});
 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/cadastro', (req, res)=> {
    fs.readFile(path.join(__dirname, "/public/pages/cadastro.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.post('/cadastro', (req, res)=> {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.pwd;
    const repetirSenha = req.body.pwdRpt;

    if(senha !== repetirSenha){
        res.send(` <script>
            alert("As senhas digitadas são diferentes...");
            location.href = "/cadastro"
        </script> `);        
    } else {
        const usuario = new Usuario(nome, email, senha);
        GerenciadorUsuarios.adicionarUsuario(usuario);

        res.redirect('/');
    }


    const usuario1 = new Usuario('a, luciano@gmail.com, a');
    
    GerenciadorUsuarios.adicionarUsuario(usuario1);

        if(usuarioEncontrado){
            console.log('Encontrado: ', usuarioEncontrado.toString('alexandre@gmail.com'));
        }else{
            console.log('Usuário não encontrado')
        }
     
    });
app.get('/cadastroproduto', (req, res)=> {
    fs.readFile(path.join(__dirname, "/public/pages/cadastroproduto.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }
    
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});
app.post('/cadastroproduto', (req, res)=> {
    const vendedor = req.body.vendedor;
    const nomeproduto = req.body.nomeproduto;
    const tipoproduto = req.body.tipoproduto;
    const preco = req.body.preco;
    const produto = new Produto(vendedor, nomeproduto, preco);
        GerenciadorProdutos.adicionarProduto(produto);

        res.redirect('/');
});


app.get('/salgados', (req, res) =>{
    fs.readFile(path.join(__dirname, "public/pages/salgados.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/sucos', (req, res) =>{
    fs.readFile(path.join(__dirname, "public/pages/sucos.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/usuarios', (req, res) =>{
    fs.readFile(path.join(__dirname, "public/pages/usuarios.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});
app.get('/produtos', (req, res) =>{
    fs.readFile(path.join(__dirname, "public/pages/produtos.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/doces', (req, res) =>{
    fs.readFile(path.join(__dirname, "public/pages/doces.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.post('/login', (req, res)=> {
    const email = req.body.email;
    const senha = req.body.pwd;

    const validacao = GerenciadorUsuarios.validarLoginSenha(email, senha);

    if(validacao.valid){
        res.redirect("/home")
    }else{
        res.send(` <script>
                        alert("${validacao.message}");
                        location.href = "/"
                   </script>`);
    }
    
});
app.get('/home', (req, res)=> {
    fs.readFile(path.join(__dirname, "/public/pages/index.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/mostrar-usuarios', (req, res)=>{
    const usuarios = GerenciadorUsuarios.obterUsuarios();
    let html = '<h1> Lista de Usuários <h1><ul>';

    usuarios.forEach(usuario => {
        html += `<li> Nome: ${usuario.nome}, E-mail: ${usuario.email} </li>`
    })
    html += '</ul>'
    res.send(html);

})
app.get('/mostrar-produtos', (req, res)=>{
    const produtos = GerenciadorProdutos.obterProdutos();
    let html = '<h1> Lista de Produtos <h1><ul>';

    produtos.forEach(produto => {
        html += `<li> Nome do vendedor: ${produto.vendedor}, Preço: ${produto.preco} </li>`
    })
    html += '</ul>'
    res.send(html);

})


app.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:'+ port);
});