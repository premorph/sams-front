import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRoutingModule } from './cash-routing.module';
import { FlowComponent } from './pages/flow/flow.component';
import { BalanceComponent } from './pages/balance/balance.component';


@NgModule({
  declarations: [
    FlowComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    CashRoutingModule
  ]
})
export class CashModule { }
