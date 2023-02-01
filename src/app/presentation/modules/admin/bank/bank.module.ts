import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './pages/bank/bank.component';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    BankComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
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
  ]
})
export class BankModule { }
