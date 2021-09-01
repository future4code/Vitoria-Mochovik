import { Request, Response } from "express";
import selectUserBySearch from "../data/selectUserBySearch";

export default async function getUserById(req: Request, res: Response) {
    try {


        const users = await selectUserBySearch(req.params.query)
        if(!users) {
            throw new Error("User not found!");
        }



        res.status(200).send({
            users
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}