/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

numberArray = numberArray.map((num, index) => {
  if (index === 0) return "one";
  if (index === 2) return "three";
  if (index === 4) return "five";
  return num.toString();
});

stringArray = stringArray.map((str) => {
  switch (str) {
    case "foo":
      return "f00";
    case "bar":
      return "Bar";
    case "baz":
      return "b@z";
    case "qux":
      return "quX";
    case "echo":
      return "3ch0";
    default:
      return str;
  }
});

result.push("h@ck");
result.push(...numberArray);
result.push("h@ck");
result.push(...stringArray);
result.push("h@ck");

//export result
module.exports = result;