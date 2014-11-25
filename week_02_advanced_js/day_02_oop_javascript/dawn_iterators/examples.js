// forEach, map, filter, reduce


// var thing = [1,2,3,4,5,6];


// thing.forEach(function(element, indexInArray) {
//   console.log("element", element);
//   console.log("indexInArray", indexInArray);
// })

// var finalArray = []
// for(var i =0; i < thing.length ; i++ ) {
//   var tempValue = thing[i] * 2;
//   finalArray.push(tempValue);
// }

// console.log(finalArray);
// var thing2 = [{name: "Lenny", age: 100}, {name: "Anil", age: -40}, {name: "Sarah", age: 99}];

// var mappedStuff = thing2.map(function(element, index) {
//  return element.name.toUpperCase() + " is " + element.age + " years old";
// })

// thing2.map(function(element, index) {
//  return element.name.toUpperCase() + " is " + element.age + " years old";
// }).forEach(function(element) {
//   console.log(element);
// })



// console.log(mappedStuff);
// console.log(thing);


var thing2 = [{name: "Lenny", age: 100}, {name: "Anil", age: 100}, {name: "Sarah", age: 99}];

// var filteredStuff = thing2.filter(function(element) {
//   var someCondition = (element.name.length > 4)
//   return someCondition;
// }).map(function(element, index) {
//  return element.name.toUpperCase() + " is " + element.age + " years old";
// }).forEach(function(element,i) {
//   console.log('item ' + i + ' is...')
//   console.log(element);
//   console.log('----------------');
//   console.log(' ');
// })

// console.log(filteredStuff);

// var thing = [1,2,3,4,5,6];
var thing = ["5s", "342s", "fhad", "f23r"]

var reductionFormula = function (preTaco, currentBurrito) {
  console.log("preTaco", preTaco);
  console.log("currentBurrito", currentBurrito);
  console.log("------")
 return (preTaco + currentBurrito)
}

var reducedStuff = thing.reduce(reductionFormula)

console.log("reducedstuff", reducedStuff)








