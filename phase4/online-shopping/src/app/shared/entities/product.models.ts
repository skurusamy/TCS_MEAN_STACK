

export interface IProduct{
    _id?: string,
    pid:string,
    pname:string,
    brand:string,
    category:string,
    price:number,
    quantity:number
}
export class Product implements IProduct{
    constructor(
        public pid: string,
        public pname:string,
        public brand: string,
        public category: string,
        public price: number,
        public quantity: number,
        public _id?: string
    ){
        this._id = _id ? _id : null;
        this.pid = pid;
        this.pname = pname;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.quantity = quantity;

    }
}