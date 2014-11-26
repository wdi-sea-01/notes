var taco = require('assert');

var sum = function(num1,num2,num3){
    return num1 + num2 + (num3 || 0);
    //return num1 + num2 + (num3 ? num3 : 0);
}


taco.strictEqual(sum(1,1),2,"1 and 1 should be 2");
console.log('sum(1,1) outputs: '+sum(1,1));
taco.strictEqual(sum(1,1,1),3,"1 and 1 and 1 should be 3");
console.log('sum(1,1,1) outputs: '+sum(1,1,1));
