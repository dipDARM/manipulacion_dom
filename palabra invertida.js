let palbra = document.getElementById("palabra");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    let palabra = palbra.value;
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    resultado.textContent = palabraInvertida;
});