import { Component, Input } from '@angular/core';
import { UserEntity } from '@Data/Repositories/user/entities';

@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
    user: UserEntity = {
        id: '',
        fullname: '',
        email: '',
        phoneNum: '',
        password: '',
        profilePicture: '',
        activationStatus: undefined,
    };
    submitted: boolean = false;
    statuses: any[] = [];

    constructor() {}
ngOnInit(){
  console.log('init'  )
}
    saveProduct() {}
    hideDialog() {}
}
