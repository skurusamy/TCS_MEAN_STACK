export interface IProduct {
  _id?: string;
  name: string;
  brand: string;
  price:number;
  email:string;
  quantity:number;
}

export class Product implements IProduct {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public email:string,
    public quantity: number,
    public _id?: string
    

  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.email = email;
    this.quantity = quantity;
  }
}