let variable = prompt('Ingrese el precio del juego') /* Ingresamos una variable que se usará más adelante para calcular todo*/

const impuestos = [1, 0.35, 0.21, 0.08] /* Utilizamos el Array para hacer una lista de los impuestos aplicables y el 1 para que juntos hagan 1.64 (Y de paso facilitarme la multiplicación más adelante) */

let impTotales = impuestos[0] + impuestos[1] + impuestos[2] + impuestos[3] /* Sumamos el Array para luego usarlo en la variable y calcular el precio del juego */

let tap = parseFloat(impTotales) * parseFloat(variable); /* Los convertimos en flotantes para que no me concatene los valores */

console.log(('Tendrías que pagar aproximadamente ') + tap.toFixed() + ' ARS'); /* Agregamos .toFixed para arreglar la buena cantidad de decimales extras que metía la multiplicación */
