let palabra = document.getElementById("palabra");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    let palabraSinEspacios = palabra.value.replaceAll(" ", "").toLowerCase();
    let palabraInvertida = palabra.value.split("").reverse().join("");
    
    if (palabraSinEspacios === palabraInvertida) {
        resultado.textContent = "Es un palíndromo";
    } else {
        resultado.textContent = "No es un palíndromo";
    }
});