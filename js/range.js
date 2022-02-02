"use strict";

const iniciarRange = (id) => {
    const mostrarValorSlider = () => {
        const slider = document.querySelector(`.slider#${id}`);
        const span = document.querySelector(`span#valor_${id}`);

        span.textContent = `${slider.value}${slider.dataset.unidade}`;
    }

    document.querySelector(`.slider#${id}`).addEventListener("input", mostrarValorSlider);
}

export { iniciarRange };