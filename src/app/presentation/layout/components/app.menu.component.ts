import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '@Presentation/layout/service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone:true,
    imports:[CommonModule,AppMenuitemComponent]
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'inventory', icon: 'pi pi-fw pi-home', routerLink: ['/inventory'] },
                ]
            },
            
        ];
    }
}
