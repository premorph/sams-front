import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRoutingModule } from './cash-routing.module';
import { FlowComponent } from './pages/flow/flow.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { CashFormComponent } from './components/cash-form/cash-form.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    FlowComponent,
    BalanceComponent,
  ],
  imports: [
    CashFormComponent,
    CommonModule,
    CashRoutingModule,
    DialogModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    FormsModule,
    RatingModule,
    ToastModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    StepsModule,
    RadioButtonModule
  ]
})
export class CashModule { }
