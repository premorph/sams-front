export interface UserEntity{
  id:string;
  fullname:string;
  email:string;
  phoneNum:string;
  password:string;
  profilePicture:string;
  activationStatus:activationState | any;
}

interface activationState{
    label:string;
    value:string
}
