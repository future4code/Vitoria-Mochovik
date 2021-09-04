import User from "../../entities/User";
import { connection } from "../connection";
import { BaseDatabase } from "../BaseDatabase";


export default class UserDatabase extends BaseDatabase {

    private static tableName = "Users_ECommerce"

    private toUser = (input: any): User => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )
    insertUser = (user: User) => 
        BaseDatabase
            .connection(UserDatabase.tableName)
            .insert(user)

    getAllUsers = async () => {
        const users = await BaseDatabase
            .connection(UserDatabase.tableName)
        return users.map(this.toUser)
    }
}
