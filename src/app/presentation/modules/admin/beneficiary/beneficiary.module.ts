import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { BeneficiaryComponent } from './pages/beneficiary/beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { BeneficiaryFormComponent } from './components/beneficiary-form/beneficiary-form.component';


@NgModule({
  declarations: [
    BeneficiaryComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryRoutingModule,
    DialogModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule, InputNumberModule,
    RadioButtonModule,
    FormsModule,
    RatingModule,
    ToastModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    BeneficiaryFormComponent
  ]
})
export class BeneficiaryModule { }
