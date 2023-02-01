import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
  providers:[MessageService]
})
export class BankComponent {
  addBankDialog:boolean=false
  cols:{field:string,header:string}[]=[]
  new(){
    this.addBankDialog=true
  }
}
