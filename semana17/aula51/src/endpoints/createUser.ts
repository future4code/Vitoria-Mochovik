import { config } from "dotenv";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import transporter from "../services/mailTransporter";
import { addressInfo, user, userAddressInfo } from "../types";


config()

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address } = req.body

      if (!name || !nickname || !email || !address) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const id: string = Date.now().toString()
      const addressId: string = Date.now() + Math.random().toString()


      const newUser: user = { id, name, nickname, email, address: address.cep }
      
      const newAddressInfo: userAddressInfo = {
        id: addressId,
        zip_code: address.cep,
        street: address.street,
        number: address.number,
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        user_id: id
      }


      await connection('aula51_users').insert(newUser)
      await connection('userAddress').insert(newAddressInfo)

      const mailInfo = await transporter.sendMail({
          from: `<${process.env.NODEMAILER_USER}>`,
          to: `lbn_report_molina-aaaadvqgvvkxbtcijshbktp4ki@labenualunos.slack.com `,
          subject: `Finalize seu cadastro ${name}`,
          html: `
            <p> Bem-vindo ${name}!!! </p>
            <button> Clique aqui para finalizar seu cadastro </button>
          `,
          text: `Utilizei apenas uma tag p para dar Boas-vindas ao usuário cadastrado e 
          um button para que ele finalize nosso cadastro (sem funcionalidade) `
      })


      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}