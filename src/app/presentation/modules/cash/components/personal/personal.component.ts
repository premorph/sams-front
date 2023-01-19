import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { BalanceImplementionRepository } from '@Data/Repositories/';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule
    ],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers:[BalanceImplementionRepository,MessageService]
})
export class PersonalComponent {
    submitted:boolean=false
    constructor(private navigate:Router, public balanceRepository:BalanceImplementionRepository,private messageService:MessageService){}
    nextPage(){
        // if(form.invalid){
        //     return this.messageService.add({})
        // }
        this.navigate.navigate(['/cash/balance/beneficiary'])
    }
}
