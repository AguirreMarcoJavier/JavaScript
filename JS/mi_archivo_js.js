var numero = prompt("Ingrese un numero por favor: ");
for (let i = 0; i < numero; i++) {
  alert ('Muy bien, se Mostrará hola ' + numero + " veces en la consola")
  console.log ('Hola');
}
if (numero <= 0){
  alert ('No hay frase que mostrar :(')
}