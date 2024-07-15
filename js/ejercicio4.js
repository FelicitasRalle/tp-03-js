function parImpar(numero){
    if(numero % 2 === 0){
        return 'El numero es par';
    }else{
        return 'El numero es impar';
    }
}

let numero = parseInt(prompt('Ingrese un numero'));

let resultado = parImpar(numero);

alert(resultado);