//enahced object literals   

function book(title, author, uId = 1) {
    return {
        title: title, //se puede asignar asi
        author,     //o asi si el nombre de la propiedad es igual al valor
        id: uId
    }
}

console.log(book('The Alchemist', 'Paulo Coelho')); // {title: 'The Alchemist', author: 'Paulo Coelho', id: 1}