let text = document.getElementById("numero")
let boton = document.getElementById("boton")
let resultado = document.getElementById("resultado")

boton.addEventListener("click", () => {
    let numero = Number(text.value);
    let tabla = "";

    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = tabla;
});