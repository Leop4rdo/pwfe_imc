"use strict";

const iniciarRange = (id) => {
    const mostrarValorSlider = () => {
        const slider = document.querySelector(`.slider#${id}`);
        const span = document.querySelector(`span#valor_${id}`);
        
        let unidade = (id === "peso") ? "kg" : "m";
        

        span.textContent = `${slider.value}${unidade}`;
    }

    document.querySelector(`.slider#${id}`).addEventListener("input", mostrarValorSlider);
}

export { iniciarRange };