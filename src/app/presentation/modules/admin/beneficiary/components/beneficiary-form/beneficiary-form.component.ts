import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
interface IBeneficiary {
    dni?: string;
    name?: string;
    email?: string;
    isActive?: string;
    type?: string;
}
@Component({
    selector: 'app-beneficiary-form',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        ToastModule,
        ButtonModule,
        FormsModule,
    ],
    templateUrl: './beneficiary-form.component.html',
    styleUrls: ['./beneficiary-form.component.scss'],
    providers: [MessageService],
})
export class BeneficiaryFormComponent {
    submitted: boolean = false;
    @Input() beneficiary: IBeneficiary = {};
}
