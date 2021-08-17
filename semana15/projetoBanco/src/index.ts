import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { openFile, saveFile } from "./file";
import { Statement } from "./types";
import { analizeTodayDate } from "./data"
import { refresh } from "./refreshFunction";

const app: Express = express();
app.use(express.json());
app.use(cors());


//CRIAR CONTA

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, cpf, birth_date } = req.body

        const [day, month, year] = birth_date.split("/")
        const birthDate: Date = new Date(`${year}-${month}-${day}`)

        const age: number = (Date.now() - birthDate.getTime()) /1000 / 60 / 60 /24 / 365

        if(age < 18) {
            res.statusCode = 406
            throw new Error("Age must be over 18 years old")
        }

        const clients = openFile()
        if(clients.findIndex(person => person.cpf === cpf) >= 0) {
            throw new Error("Cpf already registered")
        }
        
        clients.push({
            name,
            cpf,
            birth_date: birthDate,
            balance: 0,
            statement: []
        })
        saveFile( clients)
        res.status(201).send("Account Created Successfully!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//TRANSFERÊNCIA INTERNA

app.post("/users/transfer", (req: Request, res: Response) => {
    try{
        const {recipient, sender, value} = req.body

        if(!recipient.name || !recipient.cpf || !sender.name || !sender.cpf || !value) {
            throw new Error("Inform: sender{name, cpf}, recipient{name, cpf}, value");
        }

        if(typeof value !== "number") {
            throw new Error("Please enter a valid value for transfer");
        }

        if(value < 0){
            throw new Error("Enter a value greater than 0");
        }

        let clients = openFile()
        const clientSenderIndex = clients.findIndex(person => person.cpf === sender.cpf && person.name === sender.name)
        const clientRecipientIndex = clients.findIndex(person => person.cpf === recipient.cpf && person.name === recipient.name)

        if(clientSenderIndex <0 || clientRecipientIndex<0){
            if(clientSenderIndex<0 && clientRecipientIndex<0) {
                throw new Error("Sending customer and receiving customer not found");
            }

            if(clientSenderIndex<0){
                throw new Error("Sending customer not found");
            }

            if(clientRecipientIndex <0) {
                throw new Error("Recipient customer not found");
            }
        }

        if(clients[clientSenderIndex].balance < value) {
            throw new Error("Insufficient funds");
        }

        const send : Statement = {
            refresh: true,
            value: value*-1,
            description: "Transferência bancaria para" + recipient.name,
            date: new Date()
        }

        const recip : Statement = {
            refresh: true,
            value: value,
            description: "Transferência recebida de" + sender.name,
            date: new Date()
        }

        
        clients[clientSenderIndex].statement.push(send)
        clients[clientRecipientIndex].statement.push(recip)
        saveFile(clients)

        res.status(200).send("Transfer successful!")

    } catch (error) {
        res.status(400).send(error.message)
    }
})

//PAGAR CONTA

app.post("/users/pay", (req: Request, res: Response) => {
    try {
        let {cpf, description, value, date} = req.body

        if(!cpf || !description || !value ) {
            throw new Error("Inform cpf, description, value and date")
        }

        if(typeof value !== "number") {
            throw new Error("Enter a value in number format")
        }

        if( value <= 0) {
            throw new Error("Enter a value greater than 0");
        }

        if(!date){
            date = new Date()
        }

        if(!analizeTodayDate(date)){
            throw new Error("Date entered must be greater than or equal to current date");
        }

        const clients = openFile()
        const clientIndex = clients.findIndex(person => person.cpf === cpf)

        if(clientIndex<0){
            throw new Error("Customer not found"); 
        }

        if(value > clients[clientIndex].balance){
            throw new Error("Insufficient funds");
        }

        const statement: Statement={
            value: value*-1,
            date,
            description,
            refresh: true
        }

        clients[clientIndex].statement.push(statement)
        saveFile(clients)

        res.status(200).send(statement)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//PEGAR TODOS OS CLIENTES

app.get("/users/all", (req: Request, res: Response) => {
    try {
        const clients = openFile()
        if(!clients.length) {
            res.statusCode = 404
            throw new Error("No accounts found")
        }
        res.status(200).send(clients)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//PEGAR SALDO

app.get("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = req.params.cpf.toString()
        console.log("teste", cpf)
        if(!cpf) {
            throw new Error ("Inform the cpf")
        }

        const clients = openFile()
        const client = (clients.find(person => person.cpf === cpf))

        if(!client) {
            throw new Error ("Cpf not found")
        }

        res.status(200).send({balance: client.balance})
    } catch(error) {
        res.status(400).send(error.message)
    }
})

//ADICIONAR SALDO

app.put("/users/add", (req: Request, res: Response) => {
    try {
        const {name, cpf, value} = req.body
        if(!name || !cpf || !value) {
            throw new Error("Inform name, cpf and value")
        }

        if(typeof value !== "number") {
            throw new Error("Inform a value in number format")
        }
        if(value<=0){
            throw new Error("Enter a value greater than 0")
        }

        const clients = openFile()
        const clientIndex = clients.findIndex(person => person.cpf === cpf.toString() && person.name === name.toString())

        if(!clientIndex){
            throw new Error("There is no customer with the corresponding name and cpf")
        }

        const statement: Statement = {
            date: new Date(),
            value,
            description: "Depósito em dinheiro",
            refresh: true,
        }

        clients[clientIndex].balance+=Number(value)
        clients[clientIndex].statement.push(statement)
        saveFile(clients)

        res.status(200).send("Balance successfully added!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// ATUALIZAR SALDO

app.put("/users/refresh?", (req: Request, res: Response) => {
    try {
        const {cpf} = req.query
        if(typeof cpf !== "string") {
            throw new Error("Enter a valid CPF");
        }

        const clients = openFile()
        const clientIndex = clients.findIndex(person => person.cpf === cpf)

        if(clientIndex < 0){
            throw new Error("Customer not found!");
        }

        const client = refresh(clients[clientIndex])
        clients[clientIndex] = client
        saveFile(clients)

        res.status(200).send(client)
    } catch (error) {
        res.status(400).send(error.message)
    }

})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
    try{
        let fs = require('fs')
        const banco =  JSON.parse(fs.readFileSync('clients.txt').toString())
      }
      catch (err){
        let fs = require('fs')
        fs.writeFile('clients.txt', JSON.stringify('{}'), (err: Error)=>{
          if(err) {
            console.log('Erro ao criar banco.json')
            throw new Error('Erro ao criar banco.json')
          }
        })
      }
});