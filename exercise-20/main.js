
const fruits = ["apple", "banana", "cherry"]

const lengths = fruits.map((fruit)=>{
    console.log(fruit);
    return fruit;
})


console.log('=====')



for(let fruit of lengths){
    for (let letter of fruit){
        console.log(letter)
    }
}






