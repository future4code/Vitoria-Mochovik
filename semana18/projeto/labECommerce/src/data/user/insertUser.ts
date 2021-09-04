import User from "../../entities/User";
import { connection } from "../connection";

export default async function insertUser(
    user: User
) {
    await connection.insert({
        id: user.getId(),
        name: user.name,
        email: user.email,
        age: user.age
    }).into('Users_ECommerce')
}