

export default class User {
    constructor(
        private id: string,
        public name: string,
        public email: string,
        public age: number
    ){
        this.id = id
        this.name = name
        this.email = email
        this.age = age
    }

    public getId(): string {
        return this.id
    }

}