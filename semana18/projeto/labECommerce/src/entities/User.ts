

export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private age: number
    ){
        this.id = id
        this.name = name
        this.email = email
        this.age = age
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getAge(): number {
        return this.age
    }
}