const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!'); //se resolvio la promesa
        }else {
            reject('Ups!'); //no se resolvio la promesa
        }
    });
}

anotherFunction()
    .then(response => console.log(response)) 
    .catch(error => console.error(error));