import { Client } from "../types"
import Residence from "./Residence"

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    calculateBill(): number { return this.consumedEnergy * 0.75 };

    getCPF(){
        return this.cpf
    }
}