import { Request, Response } from "express";
import { connection } from "../../data/connection";

import Product from "../../entities/Product";

import { ProductT } from "../../types/product";
import { ProductDatabase } from "../../data/product/ProductDatabase";

export const createTicket = async (req: Request, res: Response) => {
    try {
        const {name, description, price, origin, destination} = req.body

        if(!name || !description || !price || !origin || !destination) {
            throw new Error("Fill all fields: 'name', 'description', 'price', 'origin' and 'destination'.");
        }

        if( typeof name != "string" || typeof price != "number" || 
        typeof description != "string" || typeof origin != "string" || typeof destination != "string"){
            throw new Error("'Name', 'description', 'origin' and 'destination' must be of type string and 'price' must be of type number");
        }

        
        const id = Date.now() + Math.random().toString()
        const product = new Product(id, name, description, price, origin, destination)

        await new ProductDatabase().insertProduct(product)

        res.status(201).send({
            message: "Ticket created successfully!",
            product
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}