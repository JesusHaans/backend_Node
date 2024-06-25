function square1(x) { // normal function
    return x * x;
}

const square2 = (x) => { // explicit return
    x * x;
}

const square3 = x => x * x; // implicit return

console.log( square3(5)) ;// 25