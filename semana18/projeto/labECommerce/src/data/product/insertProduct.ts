import Product from "../../entities/Product";
import { connection } from "../connection";
import knex from "knex";

export default async function insertProduct(
    product: Product
) {
     
    await connection.insert({
        id: product.getId(),
        name: product.name,
        description: product.description,
        price: product.price,
        origin: product.origin,
        destination: product.destination
    }).into('Products_ECommerce')

    
}