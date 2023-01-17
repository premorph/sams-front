import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BalanceImplementionRepository } from '@Data/Repositories/';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, CardModule,FormsModule,ButtonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers:[BalanceImplementionRepository]
})
export class PersonalComponent {
    balanceRepository= new BalanceImplementionRepository();
    constructor(private navigate:Router){}
    nextPage(){
        this.navigate.navigate(['/cash/balance/beneficiary'])
    }
}
