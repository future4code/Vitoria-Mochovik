

export const findBodyDontHave = (array: Array<any>): Array<string> => {
    let arrayDOntHave: Array<string> = []

    for(let i=0; i<array.length; i++){
        if(!array[i]){
            arrayDOntHave.push(array[i])
        }
    }
    return arrayDOntHave
}