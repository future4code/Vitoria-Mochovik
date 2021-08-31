import { connection } from "../connection"


export default async function selectUsersByName(
    name: string,
    type: string,
    sort: string,
    order: string
):Promise<any> {
    const result = await connection(`aula48_exercicio`)
        .where("name", "LIKE", `%${name}%`)
        .where("type", "LIKE", `%${type}%`)
        .orderBy(sort,order)
       
 
    return result
 }