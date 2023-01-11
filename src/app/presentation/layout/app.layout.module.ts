import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from "./app.layout.component";
import { AppSidebarComponent } from './components/app.sidebar.component';
import { AppMenuComponent } from './components/app.menu.component';
import { AppFooterComponent } from './components/app.footer.component';
import { AppTopBarComponent } from './components/app.topbar.component';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { AppConfigModule } from './config/config.module';
import { AnimateModule } from 'primeng/animate';

@NgModule({
    declarations: [

        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AnimateModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
