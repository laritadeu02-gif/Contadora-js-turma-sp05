const contadora = document.querySelector("#contadora");
const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-rmv");
const btnReset = document.querySelector("#btn-reset");
const btnSave = document.querySelector("#btn-save");
const btnLoad = document.querySelector("#btn-load");

let contadoraValor = 0;

function atualizarContadora() {
    contadora.innerHTML = contadoraValor;
}

function incrementarContadora() {
    contadoraValor++;
    atualizarContadora()
}

function decrementarContadora() {
    contadoraValor--;
    atualizarContadora
}

incrementarContadora()

function resetarContadora() {
    contadoraValor = 0;
    atualizarContadora();
}

function salvarContadora() {
    localStorage.setItem("contadora", contadoraValor);
}

function carregarContadora() {
    let valorSalvo = localStorage.getItem("contadora");
    if (valorSalvo !== null) {
        contadoraValor = Number(valorSalvo);
  }
  atualizarContadora()
}

btnAdd.addEventListener("click", incrementarContadora);
btnRemove.addEventListener("click", decrementarContadora);
btnReset.addEventListener("click", resetarContadora);
btnSave.addEventListener("click",salvarContadora);
btnLoad.addEventListener("click", carregarContadora);