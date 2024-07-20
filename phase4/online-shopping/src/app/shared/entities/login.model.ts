export interface ILogin{
    _id?: string;
    email: string;
    password: String;
}

export class Login implements ILogin{
    constructor(
    public email: string,
    public password: String,
    public _id?: string
    ){
        this._id = _id ? _id : null;
        this.email = email;
        this.password = password;   

    }
}