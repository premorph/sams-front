export interface UserModel{
  id:string;
  fullname:string;
  username:string;
  email?:string
  phoneNum:string;
  createdAt?:string
  profilePicture:string;
  activationStatus:boolean;
}
