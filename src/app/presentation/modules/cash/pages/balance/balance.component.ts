import { Component } from '@angular/core';
import { UserEntity } from '@Data/Repositories/user/entities';
import { Product } from '@Domain/model/Product.model';
import { IBalance } from '@Presentation/core/interfaces/balance.interface';
import { ProductService } from '@Presentation/core/services/product.service';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers:[MessageService]
})
export class BalanceComponent {
  balanceDialog:boolean=true;
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  items!: MenuItem[];
  subscription!: Subscription;
  balance:IBalance={
      date: '',
      amount:0 ,
      rate:0 ,
      bs: 0,
      boughtFrom: '',
      datePay: '',
      bankFrom: '',
      company: '',
      accountNumberFrom: '',
      ref: 0,
      note: '',
      beneficiary: '',
      bankTo: '',
      accountNumberTo: '',
      DNI: '',
      obsvervation: ''
  }
  products: Product[] = [];
  product: Product = {};
  users:UserEntity[]=[]
  selectedProducts: Product[] = [];
  submitted: boolean = false;
  cols: any[] = [];
  statuses: any[] = [];
  rowsPerPageOptions = [5, 10, 20];
  class!: string;
  user: UserEntity = {
      id: '',
      fullname: '',
      email: '',
      phoneNum: '',
      profilePicture: '',
      activationStatus: undefined,
      password: '',
  };

  constructor(
      private productService: ProductService,
      private messageService: MessageService,
      private navigate:Router
  ) {

  }
  ngOnDestroy(): void {
      this.class = 'fadeout animation-duration-500';
  }

  ngOnInit() {
      this.class = 'fadein animation-duration-500';
      this.productService
          .getProducts()
          .then((data) => (this.products = data));

      this.cols = [
          { field: 'product', header: 'Product' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'rating', header: 'Reviews' },
          { field: 'inventoryStatus', header: 'Status' },
      ];

      this.statuses = [
          { label: 'Activo', value: 'Activo' },
          { label: 'Inactivo', value: 'Inactivo' },
          { label: 'Bloqueado', value: 'Bloqueado' },
      ];
      this.items = [{
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Beneficiario',
                routerLink: 'beneficiary'
            },
            {
                label: 'Pago',
                routerLink: 'payment'
            },
            {
                label: 'Confirmacion',
                routerLink: 'confirmation'
            }
        ];

            this.messageService.add({severity:'success', summary:'Order submitted'       });
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.balanceDialog = true;
      this.navigate.navigate(['/cash/balance/personal'])
  }

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }

  editProduct(product: Product) {
      this.product = { ...product };
      this.productDialog = true;
  }

  deleteProduct(product: Product) {
      this.deleteProductDialog = true;
      this.product = { ...product };
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
      this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
      );
      this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
      });
      this.selectedProducts = [];
  }

  confirmDelete() {
      this.deleteProductDialog = false;
      this.products = this.products.filter(
          (val) => val.id !== this.product.id
      );
      this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
      });
      this.product = {};
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      this.submitted = true;





      if (this.user.fullname?.trim()) {
          if (this.user.id) {
              // @ts-ignore
              this.user.activationStatus = this.user.activationStatus
                  .value
                  ? this.user.activationStatus.value
                  : this.user.activationStatus;
              this.users[this.findIndexById(this.user.id)] =
                  this.user;
              this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'User Updated',
                  life: 3000,
              });
          } else {
              this.user.profilePicture = 'product-placeholder.svg';
              // @ts-ignore
              this.user.activationStatus = this.user.activationStatus
                  ? this.user.activationStatus.value
                  : 'ACTIVO';
              this.users.push(this.user);
              this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Created',
                  life: 3000,
              });
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      const chars =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal(
          (event.target as HTMLInputElement).value,
          'contains'
      );
  }

}
