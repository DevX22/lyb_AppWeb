export class userModel{
  id:number;
  nombreApellido:string;
  usser:string;
  email:string;
  avatar:string;
  rolUser:string;
  estado:boolean;
  /**
   *
   */
  constructor() {
    this.id=0;
    this.nombreApellido="";
    this.usser="";
    this.email="";
    this.avatar="";
    this.rolUser="";
    this.estado=false;
  }
}