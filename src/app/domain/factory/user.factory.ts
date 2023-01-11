import { UserRepository } from '@Domain/repositories/user.repository';
import { UserRegisterUseCase, userLoginUseCase } from '@Domain/useCases/user';
import { GetUserProfileUseCase } from '../useCases/user/get-user-profile.useCase';
const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new userLoginUseCase(userRepo);
export const UserLoginUseCaseProvider = {
  provide: userLoginUseCase,
  usefactory: userLoginUseCaseFactory,
  deps: [UserRepository],
};

const UserRegisterUseCaseFactory = (userRepo:UserRepository)=> new UserRegisterUseCase(userRepo)
export const userRegisterUseCaseProvider={
provide:UserRegisterUseCase,
useFactory:UserRegisterUseCaseFactory,
deps:[UserRepository]
}

const UserGetProfileUseCaseFactory = (userRepo:UserRepository)=> new GetUserProfileUseCase(userRepo)
export const userGetProfileUseCaseProvider={
provide:GetUserProfileUseCase,
useFactory:UserGetProfileUseCaseFactory,
deps:[UserRepository]
}
