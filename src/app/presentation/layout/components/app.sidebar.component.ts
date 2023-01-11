import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { LayoutService } from "@Presentation/layout/service/app.layout.service";
import { AppMenuComponent } from './app.menu.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
    standalone:true,
    imports:[CommonModule,AppMenuComponent]
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

