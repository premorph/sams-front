import { UserImplementationRepository } from '@Data/Repositories';
import { LayoutService } from '@Presentation/layout/service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserImplementationRepository,MessageService]
})
export class LoginComponent {
    form:any
    constructor(public layoutService:LayoutService, private AuthRepository:UserImplementationRepository, private fb:FormBuilder, private message:MessageService){
        this.formBuilder()
    }
    login(){
        if(this.form.status==="INVALID"){
           return this.message.add({severity:'error', summary:'Formulario invalido', detail:'Todos los valores son requeridos', life: 3000,});
        }
            const value = this.form.value
            this.AuthRepository.login(value).subscribe((res)=>{
                return this.message.add({severity:'success', summary:'Login correcto', life: 3000,});
            })
    }
    formBuilder(){
        this.form=this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.minLength(8)]]
        })
    }
    get email(){
        return this.form.get('email')
    }
    get password(){
        return this.form.get('password')
    }
}

