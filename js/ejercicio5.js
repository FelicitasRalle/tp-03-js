function formacionCadena(cadena){
    if (cadena === cadena.toUpperCase()){
        alert('La cadena esta formada solo por mayusculas');
    } else if (cadena === cadena.toLowerCase()){
        alert('La cadena esta formada solo por minusculas');
    } else{
        alert('La cadena esta formada por mayusculas y minusculas');
    }
}

let cadena = prompt('Ingrese una frase o palabra');

formacionCadena(cadena);