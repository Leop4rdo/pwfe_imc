"use strict";
import { iniciarRange } from "./range.js"; 

const validarCampos = () => document.querySelector("form#formulario").reportValidity();

const calcularIMC = (peso, altura) => peso / (altura * altura);

const classificarIMC = (imc) => {
    let aviso = document.querySelector("span#aviso");
    let categoria;

    if (imc < 18.5){
        categoria = "abaixo do peso.";
        aviso.textContent = ""
        aviso.className = "";
    } else if (imc < 25) {
        categoria = "com peso normal.";
        aviso.textContent = "Parabéns!"
        aviso.className = "verde";
    } else if (imc < 30) {
        categoria = "acima do peso.";
        aviso.textContent = ""
        aviso.className = "";
    } else if (imc < 35) {
        categoria = "com obesidade grau I.";
        aviso.textContent = ""
        aviso.className = "";
    } else if (imc < 40) { 
        categoria = "com obesidade grau II.";
        aviso.textContent = ""
        aviso.className = "";
    } else {
        categoria = "com obesidade mórbida.";
        aviso.textContent = "Cuidado!"
        aviso.className = "vermelho";
    }

    return categoria;
}

document.querySelector("button#calcular").addEventListener("click", () => { // button on click event
    const nome = document.querySelector("input#nome").value;
    const altura = document.querySelector("input#altura").value;
    const peso = document.querySelector("input#peso").value;
    const resultado = document.querySelector("span#resultado");

    if(validarCampos()) {
        const imc = calcularIMC(peso, altura);
    
        let categoria = classificarIMC(imc);

        resultado.textContent = `${nome} seu imc é de ${imc.toFixed(2)} e você esta ${categoria}`;
    } else {
        resultado.textContent = "Por favor preencha os campos de maneira valida";
    }
});

iniciarRange("peso");
iniciarRange("altura");