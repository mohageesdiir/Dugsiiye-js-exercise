console.log("exercise-25");


console.log("Spread Operators");

const number = [1,2,3,4,];

const numbers =[...number,5,6,7];

console.log(numbers);

console.log(`================`);

console.log("Rest Operators");

function multiply(...newnumber) {
    return newnumber.reduce((multiply,newnumber) => multiply * newnumber,1);
}

console.log(multiply(20,4));
