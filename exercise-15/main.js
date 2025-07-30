console.log("exercise-15");

console.log("propertiers and values of each person");

const people = [
    {name: "cali", age: 25, city: "muqdisho"},
    {name: "fadumo", age: 20, city: "hargaysa"},
    {name: "xasan", age: 22, city: "baydhabo"}
]

for (const person of people){
    for (const key in person){
        console.log(`${key}: ${person[key]}`);
    }
    console.log('---');
}





