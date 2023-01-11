import { Observable } from "rxjs";
import { UseCase } from "@Domain/base/use-case";
import { UserModel } from '@Domain/model/user.model';
import { UserRepository } from "@Domain/repositories/user.repository";

export class UserRegisterUseCase implements UseCase<{phoneNum:string;password:string},UserModel>{
  constructor(private userRepository:UserRepository){}
  execute(params: { phoneNum: string; password: string; }): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
