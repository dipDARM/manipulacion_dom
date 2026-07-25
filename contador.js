let textoArea = document.getElementById("texto_area");
let contador = document.getElementById("contador");

textoArea.addEventListener("keyup", function () {

    let texto = textoArea.value;

    let cantidadCaracteres = texto.length;

    let cantidadPalabras =
        texto.trim() === "" ? 0 : texto.trim().split(" ").length;

    let vocales = texto.match(/[aeiouáéíóú]/gi);
    let cantidadVocales = vocales ? vocales.length : 0;

    let consonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi);
    let cantidadConsonantes = consonantes ? consonantes.length : 0;

    let numeros = texto.match(/[0-9]/g);
    let cantidadNumeros = numeros ? numeros.length : 0;

    contador.textContent =
    `Palabras: ${cantidadPalabras} | Vocales: ${cantidadVocales} | Consonantes: ${cantidadConsonantes} | Numeros: ${cantidadNumeros}`;

});