import { BankComponent } from './../../pages/bank/bank.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { IBank } from '@Core/interfaces/bank.interface';

@Component({
    selector: 'app-bank-form',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        ToastModule,
        ButtonModule,
        FormsModule,
        InputMaskModule,
    ],
    templateUrl: './bank-form.component.html',
    styleUrls: ['./bank-form.component.scss'],
})
export class BankFormComponent {
    submitted: boolean = false;
    formValid: boolean = false;
    @Input() bank: IBank = {
        id: '',
        name: '',
        accountNumber: 0,
        companyId: '',
        user_id: '',
        isActive: '',
    };

    constructor(private dialogbank: BankComponent) {}
    validate(bank: IBank): boolean {
        const value = Object.entries(bank);
        this.formValid = value.length !== 4 ? false : true;
        return this.formValid;
    }
    save() {
        this.validate(this.bank);
        if (!this.formValid) {
        }
        this.dialogbank.addBankDialog = false;
        this.dialogbank.messageService.add({
            severity: 'success',
            detail: 'registro exitoso',
            life: 3000,
        });
    }
}
