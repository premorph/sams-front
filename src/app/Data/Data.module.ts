import {
  UserLoginUseCaseProvider,
  userGetProfileUseCaseProvider,
  userRegisterUseCaseProvider,
} from '@Domain/factory/user.factory';
import { NgModule } from '@angular/core';
import { UserImplementationRepository } from './Repositories/user/user-implementation.repository';
import { UserRepository } from '@Domain/repositories/user.repository';

@NgModule({
  providers: [
    UserLoginUseCaseProvider,
    userRegisterUseCaseProvider,
    userGetProfileUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [],
})
export class DataModule {}
