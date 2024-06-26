// arrays destructuring

let fruits = ['apple', 'banana', 'orange'];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); // apple
console.log(fruit2); // banana
console.log(fruit3); // orange

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
console.log(fruits[3]); // undefined

// objects destructuring

let person = {
    name: 'david',
    age: 25,
    country: 'UK'
};

let {name, age, country} = person;

console.log(name, age, person.country); // david 25 UK



//spread operator

let person1 = {
    name: 'david',
    age: 25,
};

let country1 = 'USA';

let data = {
    id: 1,
    ...person1,
    country1
};

console.log(data); // {name: 'david', age: 25, country1: 'USA'}

// rest

function sum (num, ...values) {
    console.log(values); // [2, 3, 4]
    console.log(num + values[0]); // 3
    return num + values[0];
}

sum(1, 2, 3, 4); // 3