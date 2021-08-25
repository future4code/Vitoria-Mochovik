import { connection } from "./functions/connection";

export default async function selectAllUsers() {
    
    const result = await connection('to_do_list_users')
        .select('id', 'nickname')

    console.log("result", result)
    return result
    
}