import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { User } from './entities/User';
import { Customer } from './entities/Customer';
import { Client } from '../src/types';
import {Place }from './entities/Place'

import Industry from './entities/Industry'
import Residence from './entities/Residence'
import Commerce from './entities/Commerce'
import {ResidentialClient} from './entities/ResidentialClient'


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

//EXERCICIO 03


const industryInstance = new Industry(7,'78521')
const residenceInstance = new Residence(10,'74125')
const commerceInstance = new Commerce(4,"45687")

console.table([{
    name: "Industry",
    cep: industryInstance.getCep()
},{
    name: "Residence",
    cep: residenceInstance.getCep()
},{
    name: "Commerce",
    cep: commerceInstance.getCep()
}])


//EXERCICIO 04


const instanceOfResidentialClients = new ResidentialClient("Pafuncia",234,16,"654321",145, "031408")
console.table(instanceOfResidentialClients)
console.log("getCPF: ",instanceOfResidentialClients.getCPF())
console.log("Bill: ",instanceOfResidentialClients.calculateBill())


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});