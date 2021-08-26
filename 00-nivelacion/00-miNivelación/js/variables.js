// //Var, Let, const
// //var: todo navegador lee primero los var, pero no la asignacion a posterior, ademas que es vulnerable a ser modificado
// var nombre = "Fede";
// document.write(nombre);

// saludo;
// saludo();
// var saludo = function () {
//   document.write(`Hola ${nombre}`);
// };
// /*Let y const: son dos variables que siguen el flujo de ejecucion */
// //let: evita la redefinicion de una misma variable, evitamos cualquier alcance a nivel de scope, no se puede inicializar hasta que haya sido definida, y se puede usar x cantidad de veces y ser modificada en toda la ejecucion
// document.write(nombre);
let nombre = "Fede";
document.write(nombre);
// //const: crea una variable que no puede ser reasignado su variable
