function perimetro(altura,base){
    pRectangulo = 2*(altura+base);
    return pRectangulo;
}

let altura = parseFloat(prompt('Ingrese la altura del rectangulo'));
let base = parseFloat(prompt('Ingrese la base del rectangulo'));

 let resultado = perimetro(altura,base);

alert(`El perimetro del rectangulo es ${resultado}`);