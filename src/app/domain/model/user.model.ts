export interface UserModel{
  id:string;
  fullname:string;
  email:string;
  password:string;
  phoneNum:string;
  createdAt?:string
  profilePicture:string;
  activationStatus:boolean;
}
