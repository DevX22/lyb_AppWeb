import { userModel } from "../../share/model/user.model";

export class userResponse{
  token:string;
  status:string;
  success:boolean;
  user:userModel;
  /**
   *
   */
  constructor() {
    this.token="";
    this.status="";
    this.success=true;
    this.user=new userModel();
  }
}