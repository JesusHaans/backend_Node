var lastName = 'david';// global scope
lastName = 'john';
console.log(lastName); // john

let fruit = 'apple';// block scope
fruit = 'banana';
console.log(fruit); // banana

const age = 30;// block scope
age = 31;
console.log(age); // TypeError: Assignment to constant variable.

const fruits = () => {
    if(true){
        var fruit1 = 'apple';// block scope
        let fruit2 = 'banana';
        const fruit3 = 'orange';
    }
    console.log(fruit1); // apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();