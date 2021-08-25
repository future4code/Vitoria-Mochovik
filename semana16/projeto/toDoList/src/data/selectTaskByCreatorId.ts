import { connection } from "./functions/connection";

export default async function selectTaskByCreatorId(
    id: string
): Promise<any>{
    const result = await connection.raw(`
    SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
	JOIN to_do_list_users AS users
	ON author_id = users.id
	WHERE author_id = '${id}';
    `)

    console.log("resul antes", result)
    return result[0]
}