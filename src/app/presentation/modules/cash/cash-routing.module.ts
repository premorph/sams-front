import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './pages/balance/balance.component';
import { FlowComponent } from './pages/flow/flow.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PersonalComponent } from './components/personal/personal.component';

const routes: Routes = [
    {
        path: 'balance',
        component: BalanceComponent,
        children: [
            { path: 'payment', component: PaymentComponent },
            { path: 'beneficiary', component: BeneficiaryComponent },
            { path: 'confirmation', component: ConfirmationComponent },
            { path: 'personal', component: PersonalComponent },
        ],
    },
    { path: 'flow', component: FlowComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CashRoutingModule {}
