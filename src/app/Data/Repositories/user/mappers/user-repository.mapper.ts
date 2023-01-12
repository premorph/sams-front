import { UserModel } from '@Domain/model/user.model';
import { Mapper } from '@Base/utils/mapper';
import { UserEntity } from '../entities/user-entity';
export class UserImplementationRepositoryMapper extends Mapper<UserEntity,UserModel>{
override mapFrom(param: UserEntity): UserModel {
  return {
    id:param.id,
    fullname:param.fullname,
    email:param.email,
    password:param.password,
    phoneNum:param.phoneNum,
    profilePicture:param.profilePicture,
    activationStatus:param.activationStatus

  }
}
  override mapTo(param: UserModel): UserEntity {
    return {
      id:param.id,
      fullname:param.fullname,
      email:param.email,
      password:param.password,
      phoneNum:param.phoneNum,
      profilePicture:param.profilePicture,
      activationStatus:param.activationStatus
    }
  }
}
