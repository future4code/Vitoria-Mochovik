

export default class Product {
    constructor(
        private id: string,
        public name: string,
        public description: string,
        public price: number
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }

    public getId(): string{
        return this.id
    }
}