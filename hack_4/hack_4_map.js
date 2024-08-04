/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let numeros = [1, 2, 3, 4, 5, 6, 7];

numeros.map(numero => {
  if (numero % 2 !== 0) {
    result.push(numero); 
  }
}); 

//export result
module.exports = result;