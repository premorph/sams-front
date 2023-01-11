import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './presentation/core/components/notfound/notfound.component';

import { AppLayoutModule } from '@Presentation/layout/app.layout.module';
import { CountryService } from '@Presentation/core/services/country.service';
import { CustomerService } from '@Presentation/core/services/customer.service';
import { EventService } from '@Presentation/core/services/event.service';
import { IconService } from '@Presentation/core/services/icon.service';
import { NodeService } from '@Presentation/core/services/node.service';
import { PhotoService } from '@Presentation/core/services/photo.service';
import { ProductService } from '@Presentation/core/services/product.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
