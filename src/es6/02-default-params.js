// ES5
function newUser(name, age, country){
    var name = name || 'john'; // default value
    var age = age || 30; // default value
    var country = country || 'USA'; // default value
    console.log(name, age, country);
}

newUser(); // john 30 USA   
newUser('david', 25, 'UK'); // david 25 UK

// ES6

function newAdmin(name = 'haans', age = 30, country = 'MX'){
    console.log(name, age, country);
}

newAdmin(); // haans 30 MX
newAdmin('david', 25, 'UK'); // david 25 UK