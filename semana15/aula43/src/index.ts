import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor pronto!")
})

//EXERCICIO 01

app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map((country: country) => {
        return { id: country.id, name: country.name}
    })
    res.status(200).send(result)
})

//EXERCICIO 03

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries

    try {
        if(!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Parametros invalidos")
        }
        if(req.query.name) {
            result = result.filter((country) => 
                country.name.includes(req.query.name as string)
            )
        }
        if(req.query.capital) {
            result = result.filter((country) => 
                country.capital.includes(req.query.capital as string)
            )
        }
        if(req.query.continent) {
            result = result.filter((country) =>
                country.continent.includes(req.query.continent as string))
        }
        res.status(200).send(result)
    } catch (error){
        res.status(400).send(error.message)
    }
})

//EXERCICIO 02

app.get('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const result: country | undefined = countries.find(
            country => country.id ===Number(req.params.id)
        )  
        if(!result) {
            errorCode = 404;
            throw new Error();
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
    
})

//EXERCICIO 04

app.post('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )
        if(countryIndex === -1) {
            errorCode = 404
            throw new Error
        }
        if(!req.body.name && !req.body.capital) {
            throw new Error("Parametro Invalido!")
        }
        if(req.body.name) {
            countries[countryIndex].name = req.body.name
        }
        if(req.query.capital) {
            countries[countryIndex].capital = req.body.capital
        }

        res.status(200).send("Pais atualizado com sucesso!!")
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message);
        
    }
})

//EXERCICIO 05

app.delete('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const authorization = req.headers.authorization as string
        if(!authorization || authorization.length < 10) {
            errorCode = 401
            throw new Error("Não Autorizado")
        }
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if(countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }
        countries.splice(countryIndex, 1)
        res.status(200).send("Pais deletado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message);
        
    }
})