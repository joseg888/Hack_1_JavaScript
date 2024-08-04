/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (const element of arr) {
  let modifiedString = element[0].toUpperCase() + element.slice(1);
  result.push(modifiedString);
}

//export result
module.exports = result;