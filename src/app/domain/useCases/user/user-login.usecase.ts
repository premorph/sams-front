import { Observable } from 'rxjs';
import { UseCase } from '@Domain/base/use-case';
import { UserModel } from '@Domain/model/user.model';
import { UserRepository } from '@Domain/repositories/user.repository';
export class userLoginUseCase
  implements UseCase<{ username: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}
  execute(param: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.userRepository.login(param);
  }
}
