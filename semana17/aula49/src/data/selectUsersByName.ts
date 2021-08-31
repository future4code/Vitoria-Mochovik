import { connection } from "../connection"


export default async function selectUsersByName(
    name: string,
    type: string,
    sort: string,
    order: string,
    size: number,
    offset: number
):Promise<any> {
    const result = await connection(`aula48_exercicio`)
        .where("name", "LIKE", `%${name}%`)
        .where("type", "LIKE", `%${type}%`)
        .orderBy(sort,order)
        .limit(size)
        .offset(offset)
       
 
    return result
 }