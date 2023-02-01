import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss'],
  providers:[MessageService]
})
export class BeneficiaryComponent implements OnInit {
  public addBeneficiarydialog:boolean=false
cols:{field:string,header:string}[]=[]
  constructor(public messageService:MessageService){}
ngOnInit(): void {
  this.cols = [
    { field: 'Name', header: 'Name' },
    { field: 'Email', header: 'Email' },
    { field: 'Dni', header: 'Dni' },
    { field: 'Type', header: 'Type' },
    { field: 'IsActive', header: 'IsActive' },
];
}
new(){
this.addBeneficiarydialog=true
}
}
