export interface UserEntity{
  id:string;
  fullname:string;
  email:string;
  phoneNum:string;
  profilePicture:string;
  activationStatus:activationState;
}

interface activationState{
    label:string;
    value:string
}
