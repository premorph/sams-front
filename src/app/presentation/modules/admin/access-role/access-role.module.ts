import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoleRoutingModule } from './access-role-routing.module';
import { RoleComponent } from './pages/role/role.component';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    AccessRoleRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
  ]
})
export class AccessRoleModule { }
