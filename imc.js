"use strict";

document.querySelector("button#calcular").addEventListener("click", () => {
    const nome = document.querySelector("input#nome").value;
    const altura = document.querySelector("input#altura").value;
    const peso = document.querySelector("input#peso").value;
    const resultado = document.querySelector("div#resultado");
    
    console.log(validarCampos())

    if(validarCampos()) {
        const imc = calcularIMC(peso, altura);
    
        let categoria = classificarIMC();

        resultado.textContent = `${nome} seu imc é de ${imc.toFixed(2)} e você esta ${categoria}`;
    } else {
        resultado.textContent = "Por favor preencha os campos de maneira valida";
    }
    
    
});

function validarCampos() {
    return document.querySelector("form#formulario").reportValidity();
}

function calcularIMC(peso, altura){
    return peso / altura**2;
}

function classificarIMC(imc) {
    let categoria;
    if (imc < 18.5){
        categoria = "abaixo do peso";
    } else if (imc < 25) {
        categoria = "com peso normal";
    } else if (imc < 30) {
        categoria = "acima do peso";
    } else if (imc < 35) {
        categoria = "com obesidade grau I";
    } else if (imc < 40) { 
        categoria = "com obesidade grau II";
    } else {
        categoria = "com obesidade mórbida";
    }

    return categoria;
}