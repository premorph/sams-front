import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ICash } from '../../../../core/interfaces/cash.interface';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.scss'],
    providers: [MessageService],
})
export class FlowComponent implements OnInit {
    addFlowDialog: boolean = false;
    flowDialog: boolean = false;
    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    items!: MenuItem[];
    Flow:ICash={};
    Flows!:ICash[];
    subscription!: Subscription;
    selectedProducts: any[] = [];
    submitted: boolean = false;
    cols: {field:string,header:string}[] = [];
    statuses: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        this.cols = [
            { field: 'Fecha', header: 'Fecha' },
            { field: 'Beneficiario', header: 'Beneficiario' },
            { field: 'Concepto', header: 'Concepto' },
            { field: 'Debito', header: 'Debito' },
            { field: 'Credito', header: 'Credito' },
            { field: 'Saldo', header: 'Saldo' },
        ];
    }
    new(){
        this.addFlowDialog=true
    }
    save(form:NgForm){

    }
}
