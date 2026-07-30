let color = document.getElementById("color");
let numero = document.getElementById("numero");

numero.addEventListener("keyup", () => {
    let colorValue = "text"+numero.value;
    let textElement = document.getElementById(colorValue);
    textElement.style.color = color.value;

    console.log(color.options[color.selectedIndex].text);
});