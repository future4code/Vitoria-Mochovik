import { Status } from "../types";
import { connection } from "./functions/connection";

export default async function updateTaskStatus(
    id: string,
    status: Status,
) {
    
    await connection.raw(`
        UPDATE to_do_list_tasks
        SET status = '${status}'
        WHERE id = '${id}'
    `)

}