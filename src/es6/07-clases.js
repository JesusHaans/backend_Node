// declarando una clase 
class User{

};
// instanciando una clase
const newUser = new User();

class user{
    constructor(name){
        console.log('User was created');
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`;
    }
};

const newuser = new user('Haans');
console.log(newuser.greeting());
const newuser2 = new user('Link');
console.log(newuser2.greeting());