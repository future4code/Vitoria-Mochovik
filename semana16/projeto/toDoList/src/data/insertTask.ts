import { Task } from "../types";
import { connection } from "./functions/connection";

export default async function insertTask(
    id : string,
    title : string,
    description : string,
    deadline : string,
    author_id : string
   
) {
    await connection('to_do_list_tasks')
    .insert({
        id,
        title,
        description,
        deadline,
        author_id,
    })
}