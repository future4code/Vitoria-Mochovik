import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    

    getCpf(){
        return this.cpf
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getBalance(){
        return this.balance
    }

    getTransactions(): Transaction[]{
        return this.transactions
    }


    setCpf(newCpf: string){
        this.cpf = newCpf
    }

    setName(newName: string){
        this.name = newName
    }

    setAge(newAge: number){
        this.age = newAge
    }

    setBalance(newBalance: number){
        this.balance = newBalance
    }

    setTransactions(newTransactions: Transaction[]){
        this.transactions = newTransactions
    }
  }