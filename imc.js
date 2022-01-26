"use strict";

document.querySelector("button#calcular").addEventListener("click", () => {
    const nome = document.querySelector("input#nome").value;
    const altura = document.querySelector("input#altura").value;
    const peso = document.querySelector("input#peso").value;
    const resultado = document.querySelector("div#resultado");

    if(validarCampos()) {
        const imc = calcularIMC(peso, altura);
    
        let categoria = classificarIMC(imc);

        resultado.textContent = `${nome} seu imc é de ${imc.toFixed(2)} e você esta ${categoria}`;
    } else {
        resultado.textContent = "Por favor preencha os campos de maneira valida";
    }
    
    
});

function validarCampos() {
    return document.querySelector("form#formulario").reportValidity();
}

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    let aviso = document.querySelector("span");

    let categoria;

    console.log(imc)
    if (imc < 18.5){
        categoria = "abaixo do peso";
        aviso.className = "invisible";
    } else if (imc < 25) {
        categoria = "com peso normal";
        aviso.textContent = "Parabéns!"
        aviso.className = "verde";
    } else if (imc < 30) {
        categoria = "acima do peso";
        aviso.className = "invisible";
    } else if (imc < 35) {
        categoria = "com obesidade grau I";
        aviso.className = "invisible";
    } else if (imc < 40) { 
        categoria = "com obesidade grau II";
        aviso.className = "invisible";
    } else {
        categoria = "com obesidade mórbida";
        aviso.textContent = "Cuidado!"
        aviso.className = "vermelho";
    }

    return categoria;
}