import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '@Presentation/layout/service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { IMenu } from '../interface/menu.model';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone:true,
    imports:[CommonModule,AppMenuitemComponent]
})
export class AppMenuComponent implements OnInit {

    model: IMenu[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Resumen', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                ]
            },
            {
                label: 'Administracion',
                items: [
                    { label: 'Control de Accesso', icon: 'pi pi-fw pi-users', routerLink: ['/AccessControl/'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-cog', routerLink: ['/Control/'] },
                ]
            },
            {
                label: 'Productos',
                items: [
                    { label: 'Productos', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/inventory'] },
                ]
            },
            {
                label: 'Flujo de Caja',
                items: [
                    { label: 'Historial de cambios', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/cash/balance'] },
                    { label: 'cambios', icon: 'pi pi-fw pi-dollar', routerLink: ['/cash/flow'] },
                ]
            },

        ];
    }
}
