let apariciones = Array(13).fill(0);

for (let i = 0; i <= 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let sumaDados = dado1 + dado2;

  apariciones[sumaDados]++;

  switch (sumaDados) {
    case 2:
      apariciones[2]++;
      break;
    case 3:
      apariciones[3]++;
      break;
    case 4:
      apariciones[4]++;
      break;
    case 5:
      apariciones[5]++;
      break;
    case 6:
      apariciones[6]++;
      break;
    case 7:
      apariciones[7]++;
      break;
    case 8:
      apariciones[8]++;
      break;
    case 9:
      apariciones[9]++;
      break;
    case 10:
      apariciones[10]++;
      break;
    case 11:
      apariciones[11]++;
      break;
    case 12:
      apariciones[12]++;
      break;
    default:
      break;
  }
}
document.write(`<table>
      <tbody>
        <tr>
          <th>Suma</th>
          <th>Apariciones</th>
        </tr>
        <tr>
          <th>2</th>
          <th>${apariciones[2]}</th>
        </tr>
        <tr>
          <th>3</th>
          <th>${apariciones[3]}</th>
        </tr>
        <tr>
          <th>4</th>
          <th>${apariciones[4]}</th>
        </tr>
          <tr>
          <th>5</th>
          <th>${apariciones[5]}</th>
        </tr>
        <tr>
          <th>6</th>
          <th>${apariciones[6]}</th>
        </tr>
        <tr>
          <th>7</th>
          <th>${apariciones[7]}</th>
        </tr>
        <tr>
          <th>8</th>
          <th>${apariciones[8]}</th>
        </tr>
        <tr>
          <th>9</th>
          <th>${apariciones[9]}</th>
        </tr>
        <tr>
          <th>10</th>
          <th>${apariciones[10]}</th>
        </tr>
        <tr>
          <th>11</th>
          <th>${apariciones[11]}</th>
        </tr>
        <tr>
          <th>12</th>
          <th>${apariciones[12]}</th>
        </tr>
      </tbody>
    </table>`);
