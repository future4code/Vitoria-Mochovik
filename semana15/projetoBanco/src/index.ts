import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { openFile, saveFile } from "./file";

const app: Express = express();
app.use(express.json());
app.use(cors());





//CRIAR CONTA

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, cpf, birth_dateString } = req.body

        const [day, month, year] = birth_dateString.split("/")
        const birth_date: Date = new Date(`${year}-${month}-${day}`)

        const age: number = (Date.now() - birth_date.getTime()) /1000 / 60 / 60 /24 / 365

        if(age < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        const clients = openFile()
        if(clients.findIndex(person => person.cpf === cpf) >= 0) {
            throw new Error("Cpf já cadastrado!")
        }
        
        clients.push({
            name,
            cpf,
            birth_date,
            balance: 0,
            statement: []
        })
        saveFile( clients)
        res.status(201).send("Conta Criada com Sucesso!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        const clients = openFile()
        if(!clients.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada!")
        }
        res.status(200).send(clients)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//PEGAR SALDO


//ADICIONAR SALDO

//PAGAR CONTA

//TRANSFERÊNCIA INTERNA

//
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