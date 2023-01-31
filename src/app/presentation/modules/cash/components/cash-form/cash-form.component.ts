import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ICash } from '../../../../core/interfaces/cash.interface';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {  RadioButtonModule } from 'primeng/radiobutton';

@Component({
    selector: 'app-cash-form',
    templateUrl: './cash-form.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputNumberModule,
        CalendarModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
        RadioButtonModule
    ],
    styleUrls: ['./cash-form.component.scss'],
    providers:[MessageService]
})
export class CashFormComponent {
    submitted: boolean = false;
    @Input() flow: ICash={};
    selectedValue:any
    constructor(private messageService: MessageService){

    }
    validate(flow:ICash):boolean{
     const value =  Object.entries(flow)
     const valid =(value.length!==13) ? false: true
        return valid
    }
    save(){
        const validate= this.validate(this.flow)
        console.log(this.selectedValue)
        if(!validate){
        return  this.messageService.add({severity:'error',detail:'todos los campos requeridos',life:3000})
        }
    }
}
