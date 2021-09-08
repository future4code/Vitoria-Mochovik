

export default class Product {
    constructor(
        private id: string,
        public name: string,
        public description: string,
        public price: number,
        public origin?: string,
        public destination?: string
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.origin = origin,
        this.destination = destination
    }

    public getId(): string{
        return this.id
    }
}