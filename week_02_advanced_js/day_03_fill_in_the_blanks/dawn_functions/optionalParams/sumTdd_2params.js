var taco = require('assert');

var sum = function(num1,num2){
    return num1+num2;
}

taco.strictEqual(sum(1,1),2,"1 and 1 should be 2");
console.log('sum(1,1) outputs: '+sum(1,1));