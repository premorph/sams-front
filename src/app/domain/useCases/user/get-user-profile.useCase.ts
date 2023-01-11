import { Observable } from 'rxjs';
import { UseCase } from '@Domain/base/use-case';
import { UserModel } from '@Domain/model/user.model';
import { UserRepository } from '@Domain/repositories/user.repository';
export class GetUserProfileUseCase implements UseCase<void,UserModel>{
  constructor(private userRepository:UserRepository){}
  execute(): Observable<UserModel> {
    return this.userRepository.getUserProfile()
  }
}
