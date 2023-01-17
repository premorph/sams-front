import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './pages/balance/balance.component';
import { FlowComponent } from './pages/flow/flow.component';

const routes: Routes = [
  {path:'balance',component:BalanceComponent},
  {path:'flow',component:FlowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRoutingModule { }
