import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { BalanceImplementionRepository } from '@Data/Repositories';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,ToastModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers:[BalanceImplementionRepository,MessageService]
})
export class PaymentComponent {
    submitted:boolean=false;

    constructor(private navigate:Router,
         public balanceRepository: BalanceImplementionRepository,
         private messageService:MessageService){}
  async  nextPage(){
    const condition = this.balanceRepository.paymentInformation
        if(condition.amount ==0 || condition.bs==0 || condition.note== '' || condition.datePay===null ){
            //return this.messageService.add({severity:'error', summary:'Todos los campos son necesarios'})
        }
this.navigate.navigate(['/cash/balance/confirmation'])

    }
     lastPage(){
this.navigate.navigate(['/cash/balance/personal'])
    }


}
