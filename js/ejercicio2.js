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

document.write(`<p> El arreglo de ciudades tiene ${
  ciudades.length
} ciudades </p>
  <ul>
    <li> La ciudad en la primera posicion es: ${ciudades[0]} </li>
    <li> La ciudad en la tercera posicion es: ${ciudades[2]} </li>
    <li> La ciudad en la ultima posicion es: ${ciudades[ciudades.length - 1]}
  </ul>`);

ciudades.push("Paris");
document.write(`<ul>
  <li> La ciudad en la ultima posicion es: ${ciudades[ciudades.length - 1]}</li>
  </ul>`);

ciudades[1] = "Barcelona";
document.write(`<h3> Arreglo de ciudades </h3>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li> Elemento: ${ciudades[i]} </li>`);
}
document.write(`</ul>`);
