var add = function(x,y) {
  return x + y
}

var multiply = function(x,y) {
  return x * y
}

var printMath = function(x, y, someFunction) {
  var result = someFunction(x,y)
  console.log("The result is", result)
}

console.log("ex1")
printMath(5,add(2,6),add)

var funnyMath = function(x,y) {
  return (x * x) + (y * y)
}
console.log("ex2")
printMath(5,2, funnyMath);


var thing = funnyMath(5,3);
