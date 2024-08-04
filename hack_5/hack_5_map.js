/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let numeros = [1, 2, 3, 4, 5, 6, 7];

numeros.map(numero => {
  if (numero % 2 !== 0) {
    result.unshift(numero); 
  }
}); 

//export result
module.exports = result;