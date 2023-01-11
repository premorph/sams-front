import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '@Presentation/layout/service'
@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    standalone:true,
    imports:[CommonModule]
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
