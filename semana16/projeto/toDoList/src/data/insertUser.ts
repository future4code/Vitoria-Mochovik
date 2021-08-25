import { connection } from "./functions/connection";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    nickname: string
) {
    await connection.insert({
        id,
        name,
        email,
        nickname
    }).into('to_do_list_users')
}