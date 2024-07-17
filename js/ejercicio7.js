function mostrarTabla() {
  const multiplos = Array(10);

  for (let i = 0; i < 10; i++) {
    switch (i) {
      case 0:
        multiplos[i] = numero * 1;
        break;
      case 1:
        multiplos[i] = numero * 2;
        break;
      case 2:
        multiplos[i] = numero * 3;
        break;
      case 3:
        multiplos[i] = numero * 4;
        break;
      case 4:
        multiplos[i] = numero * 5;
        break;
      case 5:
        multiplos[i] = numero * 6;
        break;
      case 6:
        multiplos[i] = numero * 7;
        break;
      case 7:
        multiplos[i] = numero * 8;
        break;
      case 8:
        multiplos[i] = numero * 9;
        break;
      case 9:
        multiplos[i] = numero * 10;
        break;
      default:
        break;
    }
  }
  document.write(`<table>
    <tbody>
      <tr>
        <th>Numero</th>
        <th>${numero}</th>
      </tr>
      <tr>
        <th>1</th>
        <th>${multiplos[0]}</th>
      </tr>
      <tr>
        <th>2</th>
        <th>${multiplos[1]}</th>
      </tr>
      <tr>
        <th>3</th>
        <th>${multiplos[2]}</th>
      </tr>
      <tr>
        <th>4</th>
        <th>${multiplos[3]}</th>
      </tr>
      <tr>
        <th>5</th>
        <th>${multiplos[4]}</th>
      </tr>
      <tr>
        <th>6</th>
        <th>${multiplos[5]}</th>
      </tr>
      <tr>
        <th>7</th>
        <th>${multiplos[6]}</th>
      </tr>
      <tr>
        <th>8</th>
        <th>${multiplos[7]}</th>
      </tr>
      <tr>
        <th>9</th>
        <th>${multiplos[8]}</th>
      </tr>
      <tr>
        <th>10</th>
        <th>${multiplos[9]}</th>
      </tr>
    </tbody>
  </table>`);
}

let numero = parseInt(
  prompt("Ingrese un numero para ver su tabla de multiplicar")
);

mostrarTabla(numero);
