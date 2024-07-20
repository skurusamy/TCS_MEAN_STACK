export interface ICart{
    pid:number;
    pname:string;
    brand:string;
    category:string;
    quantity:number;
    price:number;
}
export class Cart implements ICart{
    constructor(
        public pid:number,
        public pname:string,
        public brand:string,
        public category:string,
        public quantity:number,
        public price:number
    ){
        this.pid = pid;
        this.pname = pname;
        this.price= price;
        this.quantity = quantity;
        this.brand = brand;
        this.category = category;
    }
}