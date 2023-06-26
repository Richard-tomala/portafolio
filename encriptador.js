var botonEncriptar = document.querySelector(".btm-encriptar")
var botonDesencriptar = document.querySelector(".btm-desencriptar")
var resultadotexto = document.querySelector(".copia")
var botonCopiar = document.querySelector(".btm-copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    resultadotexto.textContent = encriptarTexto(recuperarTexto());

}

function desencriptar(){
    resultadotexto.textContent = desencriptarTexto(recuperarTexto());
}

function copiar(){
    var contenido = document.querySelector(".copia");
    contenido.select();
    document.execCommand("copy");

}

function copiarTexto(){
    var area = document.querySelector(".copia");
    document.getElementById("copyID")
}

function recuperarTexto(){
    var area = document.querySelector(".texto");
    return area.value;
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}