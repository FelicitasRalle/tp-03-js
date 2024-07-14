let ciudades = [];
let ciudad;

while (ciudad !== null) {
  ciudad = prompt(
    "Ingrese un nombre de ciudad o presione cancelar para terminar"
  );
  if (ciudad !== null && ciudad.trim() !== "") {
    ciudades.push(ciudad.trim());
  }
}

console.log(ciudades.length);

document.write(`<ul>
    <li> La ciudad en la primera posicion es: ${ciudades[0]} </li>
    <li> La ciudad en la tercera posicion es: ${ciudades[2]} </li>
    <li> La ciudad en la ultima posicion es: ${ciudades[ciudades.length - 1]}
    </ul>`);

ciudades.push("Paris");

console.log(ciudades[1]);

ciudades[1] = 'Barcelona';

console.log(ciudades);