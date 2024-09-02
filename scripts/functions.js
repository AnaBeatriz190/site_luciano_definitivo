var idade;

function digitarValor(valor){
    valorDisplay = document.getElementById("display");
    ultimoDigitado = valorDisplay.value.charAt(valorDisplay.value.length - 1);

    numero = 10; // number -> inteiro
    numero = 10.1; //number -> ponto flutuante / decimal
    nome = "luciano"; // string -> texto -> cadeia de caracteres
    professor = true; // boolean -> verdadeiro ou falso // true ou false
     
    data = null;

    alunos = ["maria", 10, false];
    alert(alunos[0]);

    switch(valor){
        case '*':
        case '/':
            if(valorDisplay.value.length == 0){
                break;
            }
        case '+':
        case '-':        
            if(ultimoDigitado != '/' 
                && ultimoDigitado != '*'
                    && ultimoDigitado != '+'
                        && ultimoDigitado != '-'){

                valorDisplay.value += valor;                    
            }
            break;
        case '=':
            if(ultimoDigitado != '/' 
                && ultimoDigitado != '*'
                    && ultimoDigitado != '+'
                        && ultimoDigitado != '-'){

                           identificarOperacao(valorDisplay.value);         
            }
            break;
        case 'c':
            valorDisplay.value = "";
            break;
        default:
            valorDisplay.value += valor;    
            break;
    }    
}

function identificarOperacao(expressao){
    valorDisplay = document.getElementById("display");

    if(expressao.includes("+")){

        var arrayDisplay = expressao.split("+");
        
        if(arrayDisplay.length == 2){
            valorDisplay.value = 
                parseInt(arrayDisplay[0]) + parseInt(arrayDisplay[1]);
        }

    } else if(expressao.includes("-")){
        
        var arrayDisplay = expressao.split("-");
        
        2 != 2 // falso - false
        "2" !== 2 // verdade - true
        
        2 < 2 // falso
        2 < 1 // falso
        2 < 3 // verdade
        
        3 > 2 // verdade
        3 > 3 // falso
        3 > 4 // falso

        3 >= 2 // falso
        3 >= 3 // verdade
        3 >= 4 // falso

        if(arrayDisplay.length == 2){
            valorDisplay.value = 
                parseInt(arrayDisplay[0]) - parseInt(arrayDisplay[1]);
        }
    } else if(expressao.includes("*")){
        var arrayDisplay = expressao.split("*");
        
        if(arrayDisplay.length == 2){
            valorDisplay.value = parseInt(arrayDisplay[0]) 
                                        * parseInt(arrayDisplay[1]);
        }
    } else if(expressao.includes("/")){
        var arrayDisplay = expressao.split("/");
        
        if(arrayDisplay.length == 2){
            valorDisplay.value = parseInt(arrayDisplay[0]) 
                                        / parseInt(arrayDisplay[1]);
        }
    }
}


function imprimirMsg(texto){
    alert('Vc clickou no botão ' + texto);
}

function login(){
    const emailCorreto = "luciano@gmail.com";
    const senhaCorreta = "senha";
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    var boxLogin = document.getElementById("box-login");
    
    if(email == "" && senha == ""){
        boxLogin.style.display = "block";
        boxLogin.innerHTML = "Erro! Por favor, digite o e-mail e a senha."
    } else if(email == "" ){
        boxLogin.style.display = "block";
        boxLogin.innerHTML = "Erro! Por favor, digite um e-mail."
    } else if(senha == ""){
        boxLogin.style.display = "block";
        boxLogin.innerHTML = "Erro! Por favor, digite uma senha."
    } else {
        if(email == emailCorreto){        
            if(senha == senhaCorreta){
    
                alert("E-mail e senha corretos");
                window.location.href = "../index.html";
    
            } else {
                boxLogin.style.display = "block";
                boxLogin.innerHTML = "Erro! Senha incorreta."
            }
    
        } else {
            boxLogin.style.display = "block";
            boxLogin.innerHTML = "Erro! Login incorreto."
        }
    
    }

    
    /*                   V && V = V
                         V && F = F
                         F && V = F
                         F && F = F
             V/F                       V/F
    if(email == emailCorreto && senha == senhaCorreta ){
        alert("E-mail e senha corretos");
    } else {
        alert("E-mail ou senha incorretos.");
    }

                        V || V = V
                        V || F = V
                        F || V = V
                        F || F = F
            V/F                       V/F
    if(email == emailCorreto || senha == senhaCorreta){

    }

    professor = 
    
    alert("E-mail digitado: " + email);
    alert("Senha digitada: " + senha);
*/
}