import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BalanceImplementionRepository } from '../../../../../Data/Repositories/balance/balance-implemention-repository.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule,
FormsModule,
CardModule,
ButtonModule,
ToastModule
],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers:[MessageService,BalanceImplementionRepository]
})
export class ConfirmationComponent {
constructor(private navigation:Router,
     private messageService:MessageService,
     public balanceRepository:BalanceImplementionRepository
     ){
        console.log(this.balanceRepository.paymentInformation)
     }
    lastPage(){
        this.navigation.navigate(['/cash/balance/payment'])
    }
    save(){

    }
}
