var taco = require('assert');

var sum = function(){
    var mySum = 0;

    for(var key in arguments){
        mySum += arguments[key];
    }

    return mySum;
}

taco.strictEqual(sum(1),1,"1 should be 1");
console.log('sum(1) outputs: '+sum(1));
taco.strictEqual(sum(1,1),2,"1 and 1 should be 2");
console.log('sum(1,1) outputs: '+sum(1,1));
taco.strictEqual(sum(1,1,1),3,"1 and 1 and 1 should be 3");
console.log('sum(1,1,1) outputs: '+sum(1,1,1));
taco.strictEqual(sum(1,1,1,1,1),5,"1 and 1 and 1 and 1 and 1 should be 5");
console.log('sum(1,1,1,1,1) outputs: '+sum(1,1,1,1,1));