let caja = document.getElementById("caja");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("boton");
let finalizar = document.getElementById("finalizar");
let acrostico = document.getElementById("acrostico");

boton.addEventListener("click", function () {

    resultado.innerHTML = "";

    let palabra = caja.value.toUpperCase();

    for (let i = 0; i < palabra.length; i++) {

        let fila = document.createElement("div");
        fila.style.marginBottom = "15px";
        fila.className = "fila";

        let letra = document.createElement("span");
        letra.textContent = palabra[i];

        let input = document.createElement("input");
        input.type = "text";

        fila.appendChild(letra);
        fila.appendChild(input);

        resultado.appendChild(fila);

        
    }
    
});

finalizar.addEventListener("click", function () {

    let filas = document.querySelectorAll(".fila");
    let textoFinal = "";

    filas.forEach(function(fila){

        let letra = fila.querySelector("span").textContent;
        let frase = fila.querySelector("input").value;

        textoFinal += letra + frase + "\n";
    });

    acrostico.value = textoFinal;
    acrostico.style.display = "block";
    let titulo = document.getElementById("titulo");

titulo.style.display = "block";
acrostico.style.display = "block";

});