import { connection } from "./connection"
import knex from "knex";


const printError = (error: any) => { console.log(error.sqlMessage || error.message) };
const createTables = () => connection
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
    .then(() =>{ console.log("Tabelas Users_ECommerce, Products_ECommerce, Purchase_ECommerce criadas!")})
    .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .then(closeConnection)

