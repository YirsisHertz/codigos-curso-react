function sumar(a, b) {
  document.write(a + b);
}
sumar(5, 4);

//Forma mejorada
function sumar(a, b) {
  return a + b;
}
const resultado = sumar(5, 4);
document.write(resultado);
/*Aca podemos sufrir un ataque xs, donde se puede redefinir el codigo*/
//Forma mejorada
const sumar = (a, b) => {
  /*Aca uso una FatArrow function, en una constante evitando asi ataques xs*/
  return a + b;
};
const resultado = sumar(5, 4);
console.write(resultado);
//Forma aun mas mejorada
const sumar = (a, b) => a + b;
/*Aca mejoramos la FarArrow, que debido a que solo contiene una instruccion, podemos ahorrarnos las llaves y el retun*/
const resultado = sumar(5, 4);
console.write(resultado);
