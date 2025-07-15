console.log("exercise of function")

// exercise-1 function  Declaration

console.log("exercise-1 function  Declaration")

function add(a,b){
    return a + b;
}

console.log(add(50,100));
console.log(add(90,20));
console.log(add(45,15));

// exercise-2 function Expression

console.log("exercise-2 function Expression")

const adds = function(a,b){
    console.log(a+b);
}

adds(50,100)
adds(90,20)
adds(45,15)


const kudar = (a,b) =>{
    console.log(a+b)
}

kudar(50,100)