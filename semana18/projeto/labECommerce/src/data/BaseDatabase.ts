import knex from "knex"
import { config } from "dotenv"

config()

export class BaseDatabase {
    protected static connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASS,
           database: process.env.DB_NAME,
           port: 3306,
           multipleStatements: true
        }
     })

     private printError = (error: any) => {
        console.log(error.sqlMessage || error.message)
     }
     
     createTables = () => BaseDatabase
      .connection
      .raw(`
      CREATE TABLE IF NOT EXISTS Users_ECommerce(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        age INT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Products_ECommerce(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        origin VARCHAR(255),
        destination VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS Purchase_ECommerce(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        idProduct VARCHAR(255) NOT NULL,
        idUser VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        amount FLOAT NOT NULL,
        FOREIGN KEY (idUser) REFERENCES Users_ECommerce(id),
        FOREIGN KEY (idProduct) REFERENCES Products_ECommerce(id)
    );
    `)
    .then(() => { console.log("Tables successfully created") })
    .catch(this.printError)
    
    closeConnection = () => {
        BaseDatabase.connection.destroy()
     }

}