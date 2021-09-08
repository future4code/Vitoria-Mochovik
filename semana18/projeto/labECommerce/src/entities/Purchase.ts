

export default class Purchase {
    constructor(
        private id: string,
        private idProduct: string,
        private idUser: string,
        public quantity: number,
        public amount: number,
    ) {
        this.id = id
        this.idProduct = idProduct
        this.idUser = idUser
        this.quantity = quantity
        this.amount = amount
    }

    public getId(): string {
        return this.id
    }

    public getIdProdct(): string {
        return this.idProduct
    }

    public getIdUser(): string {
        return this.idUser
    }

    
}