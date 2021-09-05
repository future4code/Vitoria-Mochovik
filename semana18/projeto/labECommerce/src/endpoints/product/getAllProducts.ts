import { Request, Response } from "express";
import { ProductDatabase } from "../../data/product/ProductDatabase";

import UserDatabase from "../../data/user/UserDatabase";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        
        const products = await new ProductDatabase().getAllProducts()

        res.status(201).send({
            products
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}