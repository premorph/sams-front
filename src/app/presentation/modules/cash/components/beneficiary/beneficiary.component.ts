import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule, NgForm } from '@angular/forms';
import { BalanceImplementionRepository } from '@Data/Repositories/balance/balance-implemention-repository.service';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-beneficiary',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        InputMaskModule,
        ToastModule,
    ],
    templateUrl: './beneficiary.component.html',
    styleUrls: ['./beneficiary.component.scss'],
    providers: [BalanceImplementionRepository, MessageService],
})
export class BeneficiaryComponent {
    submitted: boolean = false;
    constructor(
        private navigate: Router,
        private messageService: MessageService,
        public balanceRepository:BalanceImplementionRepository
    ) {}

    nextPage() {
        // if (form.invalid) {
        //     return this.messageService.add({
        //         severity: 'error',
        //         summary: 'Service Message',
        //         detail: 'Via MessageService',
        //     });
        // }
        this.navigate.navigate(['/cash/balance/payment']);
    }
    lastPage() {
        this.navigate.navigate(['/cash/balance/personal']);
    }
}
