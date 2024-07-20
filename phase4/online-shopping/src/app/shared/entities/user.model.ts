export interface IUser{
    _id?: string;
    name: string;
    email: string;
    phone: number;
    street:string;
    country: string;
    state: string;
    city: string;
    zip: number;
    cname: string;
    card_no: number;
    date: Date;
    ccv:number;
}

export class User implements IUser{
    constructor(
    public name: string,
    public email: string,
    public phone: number,
    public country: string,
    public street:string,
    public state: string,
    public city: string,
    public zip: number,
    public cname: string,
    public card_no: number,
    public date: Date,
    public ccv:number,
    public _id?: string
    ){
        this._id = _id ? _id : null;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.country = country;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.cname = cname;
        this.card_no = card_no;
        this.date = date;
        this.ccv = ccv;
        

    }
}