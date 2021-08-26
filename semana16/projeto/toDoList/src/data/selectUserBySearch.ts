import { connection } from "./functions/connection";
import validadeEmail from "./functions/validateEmail";

export default async function selectUserById(
    query:string
) {
    
    const result = await connection.raw(`
        SELECT id, nickname
        FROM to_do_list_users
        WHERE nickname LIKE "%${query}%" OR
        email LIKE "%${query}%"
    `)

    return result[0]
    
}