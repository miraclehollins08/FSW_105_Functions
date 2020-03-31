function sum(num1,num2) {
    return num1+num2
}
var result = sum(8,4)
console.log(result)

const numbers = [4,8,9]
const largestNumber = (values) => {
    let heighest=0;
    for (let i=0; i < values.length; i++) {

        if(values[i]>heighest){
            heighest=values[i];
        }
    }
    return heighest;
}

console.log(largestNumber(numbers));

var arrays = [13,24];
var result = arrays.filter((numbers)=>{
     if(numbers%2!==0){
       console.log(`${numbers} is odd`);
     } else {
         console.log(`${numbers} is even`);
    }
});

let name = 'Unsubstantialization';

let age = 20;

console.log( ' The age of ' + name + ' is ' + age);

