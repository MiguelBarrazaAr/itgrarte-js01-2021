/*
Dado el siguiente código completar para que muestre en pantalla todos los nombres cuya segunda letra sea la "i".
el script tendrá que mostrar el siguiente mensaje al final:
La lista tiene x nombres totales, de los cuales n nombres tienen la segunda letra que es una i.
donde x es la cantidad de nombres totales, y n es la cantidad de nombres cuya segunda letra sea la i.
*/

var nombres = ["ana", "marcos", "miriam", "romina", "milton", "andres", "luis", "alberto", "cintia", "alma", "ainara", "mariano", "silvio", "marcela", "viviana", "ariel", "ramiro"]

// completar.
var total = nombres.length;
var filtrados = [];
for(n of  nombres) {
  if(n[1] == "i") {
    console.log(n)
    filtrados.push(n)
  }
}
var cantidad = filtrados.length;
console.log(total)
console.log(cantidad)
