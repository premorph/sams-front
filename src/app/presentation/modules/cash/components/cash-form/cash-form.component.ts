import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { IBalance } from '@Presentation/core/interfaces/balance.interface';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-cash-form',
  templateUrl: './cash-form.component.html',
  standalone:true,
  imports:[CommonModule,FormsModule,InputNumberModule,ReactiveFormsModule,CalendarModule],
  styleUrls: ['./cash-form.component.scss']
})
export class CashFormComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
}
