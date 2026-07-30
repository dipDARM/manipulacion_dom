let aprendices =["Ana", "Kevin", "David", "Darwin", "Diego"];
let select = document.getElementById("Aprendices");

for (let i = 0; i < aprendices.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = aprendices[i];
    select.appendChild(option);
}
