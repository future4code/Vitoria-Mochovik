import { Request, Response } from "express";
import { connection } from "../../data/connection";

import Product from "../../entities/Product";

import { ProductT } from "../../types/product";
import { ProductDatabase } from "../../data/product/ProductDatabase";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const {name, description, price} = req.body

        if(!name || !description || !price) {
            if(!name && !description && !price){
                throw new Error("Fill all fields");
            } else if(!name && !description){
                throw new Error("Fill in the 'name' and 'description' field");
            } else if(!name && !price){
                throw new Error("Fill in the 'name' and 'price' field");
            } else if(!description && !price){
                throw new Error("Fill in the 'description' and 'price' field");
            } else if(!name){
                throw new Error("Fill in the 'name' field");
            } else if(!description){
                throw new Error("Fill in the 'description' field");
            }
        }

        if( typeof name != "string" || typeof price != "number" || typeof description != "string"){
            throw new Error("'Name' and 'description' must be of type string and 'price' must be of type number");
        }

        const resultBusca = await connection.raw(`
            SELECT * FROM Products_ECommerce
        `)

        
        const listUsers: Array<ProductT> = resultBusca[0]
        const indexOfName = listUsers.findIndex(person => person.name === name)
        const indexOfDescription = listUsers.findIndex(person => person.description === description)


        
        if(indexOfName !== -1  && indexOfDescription !== -1){
            throw new Error("Name and description already registered");
        } 
        
        const id = Date.now() + Math.random().toString()
        const product = new Product(id, name, description, price)

        await new ProductDatabase().insertProduct(product)

        res.status(201).send({
            message: "Product created successfully!",
            product
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}