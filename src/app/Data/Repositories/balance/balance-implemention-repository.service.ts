import { IBalance } from '@Presentation/core/interfaces/balance.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BalanceImplementionRepository {
  public  paymentInformation:IBalance={
        date: '',
        amount:0 ,
        rate:0 ,
        bs: 0,
        boughtFrom: '',
        datePay: '',
        bankFrom: '',
        company: '',
        accountNumberFrom: '',
        ref: '',
        note: '',
        beneficiary: '',
        bankTo: '',
        accountNumberTo: '',
        DNI: '',
        obsvervation: ''
    }
    private paymentComplete = new Subject<any>();
  constructor() { }
    setpaymentInformation(payment:any){
        this.paymentInformation=payment
    }
    complete(){
        this.paymentComplete.next(this.paymentInformation)
    }
}
