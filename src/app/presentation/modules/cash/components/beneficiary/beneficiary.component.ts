import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { BalanceImplementionRepository } from '@Data/Repositories/balance/balance-implemention-repository.service';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [CommonModule,CardModule,FormsModule],
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss'],
  providers:[BalanceImplementionRepository]
})
export class BeneficiaryComponent {
    balanceRepository= new BalanceImplementionRepository

    constructor(private navigate:Router){}

    nextPage(){
    this.navigate.navigate(['/cash/balance/payment'])
    }
}
