import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BalanceImplementionRepository } from '@Data/Repositories/balance/balance-implemention-repository.service';
import { DropdownModule } from 'primeng/dropdown';
import { IBalance } from '@Presentation/core/interfaces/balance.interface';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
@Component({
    selector: 'app-confirmation',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        ButtonModule,
        ToastModule,
        DropdownModule,
        ImageModule,
        FileUploadModule
    ],
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss'],
    providers: [MessageService, BalanceImplementionRepository],
})
export class ConfirmationComponent {
    uploadedFiles: any[] = [];
    statues: Array<{ name: string; code: string }> = [
        {
            name: 'Por Pagar Bolivares',
            code: 'Por Pagar Bolivares',
        },
        {
            name: 'Pagado',
            code: 'Pagado',
        },
        {
            name: 'Por Revisar Comprobande Pago',
            code: 'Por Revisar Comprobande Pago',
        },
        {
            name: 'Cerrado',
            code: 'Cerrado',
        },
    ];
    imageStatus:boolean=false
    selected!: IBalance;
    maxsize:number=1000000
    constructor(
        private navigation: Router,
        private messageService: MessageService,
        public balanceRepository: BalanceImplementionRepository
    ) {
        console.log(this.balanceRepository.paymentInformation);
    }
    myUploader(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);


        }
         console.log(event)
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }


    lastPage() {
        this.navigation.navigate(['/cash/balance/payment']);
    }
    save() {}
}
