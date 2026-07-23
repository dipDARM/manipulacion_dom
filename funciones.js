let titulos = document.getElementsByTagName("h1");

for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.color = titulos[i].innerHTML; 

    titulos[1].style.fontSize = "40px";      
    titulos[0].style.fontWeight = "bold";    
    titulos[2].style.fontStyle = "italic";   
    titulos[i].style.textDecoration = "underline";
    titulos[i].style.fontFamily = "ceturi gothic";
    titulos[i].style.textAlign = "center";
    titulos[i].style.backgroundColor = "gray";
    titulos[i].style.border = "2px solid black";
    titulos[i].style.padding = "10px";
    titulos[i].style.margin = "10px";
    titulos[i].style.borderRadius = "10px";
    titulos[i].style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
    titulos[i].style.transition = "all 0.3s ease-in-out";
}