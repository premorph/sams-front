
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { UserModel } from '@Domain/model/user.model';
import { UserRepository } from '@Domain/repositories/user.repository';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserEntity } from './entities/user-entity';
import { environment } from "src/environments/environment"
@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  baseUrl=environment.baseUrl
  userMapper = new UserImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }
  override login(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.baseUrl}/login`, { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  override register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.baseUrl}/register`, { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  override getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>(`${this.baseUrl}/user`)
      .pipe(map(this.userMapper.mapFrom));
  }
}
