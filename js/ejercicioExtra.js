let saldo = 1000;
const transacciones = [];
let salir = false;

while(!salir){
    let opcion = parseInt(prompt(`Seleccione una opción:
        1. Ver saldo de la cuenta
        2. Ingresar dinero
        3. Retirar dinero
        4. Ver últimas transacciones
        5. Salir`));

switch (opcion){
    case 1:
        alert(`Saldo Actual: $${saldo}`);
        break;
    case 2:
        let ingreso = parseFloat(prompt('Ingrese la cantidad de dinero a depositar: '));
        saldo = saldo + ingreso;
        alert(`Se ha ingresado $${ingreso}`);
        transacciones.push(`Se ingreso $${ingreso}`);
        break;
    case 3:
        let retiro = parseFloat(prompt('Ingrese la cantidad de dinero a retirar'));
        if(saldo>=retiro){
            saldo = saldo - retiro;
            alert(`Se ha retirado $${retiro}`);
            transacciones.push(`Se retiro $${retiro}`);
        }else{
            alert('El monto ingresado es mayor al contenido en su saldo actual');
            let retiro = prompt(`Ingrese nuevamente la cantidad de dinero a retirar, no debe exceder los $${saldo}`);
            saldo = saldo - retiro;
            alert(`Se ha retirado $${retiro}`);
            transacciones.push(`Se retiro $${retiro}`);
        }
        break;
    case 4:
        if(transacciones.length === 0){
            alert('No hay transacciones recientes');
        }
        else{
            alert('Últimas transacciones:\n' + transacciones.join('\n'));
        }
        break;
    case 5:
        salir = true;
        alert('Ha finalizado la sesion del cajero');
        break;
    default:
        alert('Opcion incorrecta, debe ingresar un numero entre el 1 y el 5');
}
}