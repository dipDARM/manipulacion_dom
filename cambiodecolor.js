let color = document.getElementById("color");
let numero = document.getElementById("numero");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    let colorValue = "text"+numero.value;
    let textElement = document.getElementById(colorValue);
    objTextocambio.style.color = color.value;
});