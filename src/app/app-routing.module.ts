import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './presentation/core/components/notfound/notfound.component';
import { AppLayoutComponent } from '@Presentation/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/home/'
                                ).then((m) => m.HomeModule),
                        },
                        {
                            path: 'inventory',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/inventory/products'
                                ).then((m) => m.ProductsModule),
                        },
                        {
                            path: 'AccessControl',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/admin/access-role'
                                ).then((m) => m.AccessRoleModule),
                        },
                        {
                            path: 'Control',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/admin/user'
                                ).then((m) => m.UserModule),
                        },{
                            path: 'cash',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/cash/'
                                ).then((m) => m.CashModule),
                        },{
                            path: 'beneficiary',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/admin/beneficiary/'
                                ).then((m) => m.BeneficiaryModule),
                        },{
                            path: 'bank',
                            loadChildren: () =>
                                import(
                                    '@Presentation/modules/admin/bank'
                                ).then((m) => m.BankModule),
                        },
                    ],
                },
                {path:'Oauth',loadChildren:()=>import('@Presentation/modules/auth').then(m=>m.AuthModule)},
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
