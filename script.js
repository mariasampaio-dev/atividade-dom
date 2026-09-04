// ==========================
// CONTADOR
// ==========================

let contador = 0;

const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const contadorTela = document.getElementById("contador");

btnIncrementar.addEventListener("click", function () {
    contador++;

    contadorTela.textContent = contador;
});

btnDecrementar.addEventListener("click", function () {

    if (contador > 0) {
        contador--;

        contadorTela.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});


// ==========================
// TEXTO DINÂMICO
// ==========================

const campoTexto = document.getElementById("texto");
const caracteres = document.getElementById("caracteres");
const textos = document.getElementById("textos");

campoTexto.addEventListener("input", function () {

    caracteres.textContent = campoTexto.value.length + " caracteres";
});

campoTexto.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter" && campoTexto.value.trim() !== "") {

        const novoTexto = document.createElement("p");

        novoTexto.textContent = campoTexto.value;

        textos.appendChild(novoTexto);

        campoTexto.value = "";

        caracteres.textContent = "0 caracteres";
    }
});


// ==========================
// LISTA
// ==========================

const tipoLista = document.getElementById("tipoLista");
const btnAdicionarLista = document.getElementById("btnAdicionarLista");
const lista = document.getElementById("lista");

btnAdicionarLista.addEventListener("click", function () {

    lista.innerHTML = "";

    let novaLista;

    if (tipoLista.value === "ul") {
        novaLista = document.createElement("ul");
    } else {
        novaLista = document.createElement("ol");
    }

    for (let i = 1; i <= 3; i++) {

        const item = document.createElement("li");

        item.textContent = "Item " + i;

        novaLista.appendChild(item);
    }

    lista.appendChild(novaLista);
});


// ==========================
// RESETAR TUDO
// ==========================

const btnResetar = document.getElementById("btnResetar");

btnResetar.addEventListener("click", function () {

    contador = 0;
    contadorTela.textContent = "0";

    campoTexto.value = "";
    caracteres.textContent = "0 caracteres";

    textos.innerHTML = "";

    lista.innerHTML = "";

    tipoLista.value = "ul";
});