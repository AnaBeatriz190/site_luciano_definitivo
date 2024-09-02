var mes = prompt("Digite o mês:" 
                    + "\n 1 - Janeiro" 
                    + "\n 2 - Fevereiro"
                    + "\n 3 - Março");

if(mes == 1){
    alert("Janeiro");
} else if(mes == 2){
    alert("Fevereiro");
} else if(mes == 3){
    alert("Março");
} else {
    alert("Mês inválido");
}                  

switch(mes){
    case '1': 
        alert("Janeiro");
        break;
    case '2':
        alert("Fevereiro");
        break;
    case '3':
        alert("Março");
        break;
    default:
        alert("Mês inválido");
        break;
}

/*

var preco = prompt("Qual o preço do produto?");
var preco = 20;
var preco2 = "20";

console.log("Preço:" + typeof preco);
console.log("Preço2:" + typeof preco2);

if(preco !== preco2){
    alert("Barato...");
} else {
    alert("Caro...");
}

var mensagem = (preco <= 20) ? "Barato..." : "Caro...";

alert(mensagem);


var nome = prompt("Qual o seu nome?");

var resposta = confirm(nome + ", você gostaria de continuar?");

if(resposta){
    alert("Bem Vindo...");
} else {
    window.location.href = "../index.html";
}

*/