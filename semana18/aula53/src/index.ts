import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { User } from './entities/User';
import { Customer } from './entities/Customer';
import { Client } from '../src/types';
import {Place }from './entities/Place'
const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//EXERCICIO 01
const user = new User("1", "vitoria@gmail.com", "Vitoria", "123456")
console.table({id: user.getId(), name: user.getName(), email: user.getEmail()})


//EXERCICIO 02
const customer = new Customer("2", "v@gmail.com", "Samuel", "123456", "147896")
console.table({id: customer.getId(), name: customer.getName(), email: customer.getEmail(), creditCard: customer.getCreditCard()})

//EXERCICIO 03

console.table(customer)

//EXERCICIO 04 && 05

console.log(customer.introduceYourself())

// POLIMORFISMO -------------------------------------------------------------------------
// EXERCICIO 01 

const client: Client = {
    name: "Astrodev",
    registrationNumber: 123456,
    consumedEnergy: 14789,
    calculateBill: ():number => {return 2}
}

console.table(client)
console.log(client.calculateBill())

//EXERCICIO 02 

//const error = new Place()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});