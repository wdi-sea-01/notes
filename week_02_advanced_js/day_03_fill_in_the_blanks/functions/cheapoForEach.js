
//define cheapForEach
//cheapForEach is a variable that is a function
var cheapForEach = function(arr,fn){
    for(var i = 0; i < arr.length; i++){
        fn(arr[i],i);
    }
}

//define tacos variable
//tacos is a variable that is an array
var tacos = ['beef','pork','pollo','veggie'];



/////////////// 1.) function as a variable
console.log('-- 1.) function as a variable ----');
var tacoLister = function(element,index){
    console.log('item '+index+' is '+element);
};

cheapForEach(tacos,tacoLister);
console.log('-------------------------------\n\n');




//////////// 2.) function inline
console.log('-- 2.) function inline -----');
cheapForEach(tacos,function(element,index){
    console.log('item '+index+' is '+element);
});
console.log('-------------------------------\n\n');




///////////3.) array inline / function as a variable
console.log('-- 3.) array inline / function as a variable --');
cheapForEach(['a','b','c'],tacoLister);
console.log('-------------------------------\n\n');


//what is \n ? ... it's the new line character
