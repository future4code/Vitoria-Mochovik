//QUESTÃO 01 
//A

let myString: string = "Typescript é legal!"

/*
    myString = 10
    Retorna um erro afirmando que o tipo 'number' não é 
    atribuível ao tipo string.
*/


//B

let myNumber: number | string = 10
myNumber = "número 10"

/*
    number | string
    Essa sintaxe permite atribuir dois tipos aquela determinada variável,
    nesse caso 'myNumber' pode ser tanto string quanto número.
*/

//D


enum CORES_DO_ARCO_IRIS {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow",
    GREEN = "Green",
    BLUE = "Blue",
    LIGHT_BLUE = "Light Blue",
    PURPLE = "Purple"
}

//C

type person = {
    name: string,
    age: number,
    favoriteColor: CORES_DO_ARCO_IRIS
}

const ana: person = {
    name: "Ana Julia Eckert",
    age: 25,
    favoriteColor: CORES_DO_ARCO_IRIS.PURPLE
}

const jonas: person = {
    name: "Jonas Rex Junior",
    age: 42,
    favoriteColor: CORES_DO_ARCO_IRIS.BLUE
}

const luiza: person = {
    name: "Luiza Brandeiro",
    age: 84,
    favoriteColor: CORES_DO_ARCO_IRIS.ORANGE
}

const samuel: person ={
    name: "Samuel Pires Mateus",
    age: 21,
    favoriteColor: CORES_DO_ARCO_IRIS.LIGHT_BLUE
}


