import { Request, Response } from "express";
import { ProductDatabase } from "../../data/product/ProductDatabase";

import UserDatabase from "../../data/user/UserDatabase";

export const getAllTickets = async (req: Request, res: Response) => {
    try {
        
        const tickets = await new ProductDatabase().getAllTickets()

        res.status(200).send({
            tickets
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}