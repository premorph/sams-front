import { IBank } from '@Presentation/core/interfaces/bank.interface';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
  providers:[MessageService]
})
export class BankComponent implements OnInit {
  public addBankDialog:boolean=false
  cols:{field:string,header:string}[]=[]
  banks!:IBank[]
  bank:IBank ={
    id: '',
    name: '',
    accountNumber: 0,
    companyId: '',
    user_id: '',
    isActive: '',
  }

  constructor(public messageService:MessageService){}
    ngOnInit(): void {
        this.cols=[{
            field:'banco',
            header:'banco'
        },{
            field:'NumberAccount',
            header:'NumberAccount'
        },{
            field:'isActive',
            header:'isActive'
        }]
    }
  new(){
    this.addBankDialog=true
  }
}
