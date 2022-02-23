import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { menuModule } from '../menu/menu.module';
import { LophocComponent } from './lophoc/lophoc.component';
//
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { LichhocComponent } from './lichhoc/lichhoc.component';
import { LichthiComponent } from './lichthi/lichthi.component';
import { KetquaComponent } from './ketqua/ketqua.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { KhoanthuComponent } from './khoanthu/khoanthu.component';
//import { HocphanComponent } from './hocphan/hocphan.component';
//
// import { NgbModule,NgbPaginationModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

export const mainRoutes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      //
      {
        path: 'admin/home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      //
    //   {
    //     path: 'admin/giaovien', component: GiaovienComponent, canActivate: [AuthGuard]

    //   },
    //   //
    //   {
    //     path: 'admin/xemhoso/:magv', component: XemhosoComponent, canActivate: [AuthGuard]

    //   },
    //   //
    //   {
    //     path: 'admin/taikhoan', component: TaikhoanComponent, canActivate: [AuthGuard]

    //   },
    //   //
      // {
      //   path: 'admin/hocphan', component: HocphanComponent
      // },
      //
      {
        path: 'admin/lophoc', component: LophocComponent
      },
      {
        path: 'admin/ketqua', component: KetquaComponent
      },
      //
      {
        path: 'admin/sinhvien', component: SinhvienComponent
      },

      {
        path: 'admin/lichhoc', component: LichhocComponent
      },

      //khi tạo component thì router ở đây
      {
        path: 'admin/lichthi', component: LichthiComponent
      },
      {
        path: 'admin/khoanthu', component: KhoanthuComponent
      },
    ],
    //

  },
];

@NgModule({ 
  declarations: [
    MainComponent,
  //  HomeComponent,
   MenuComponent,
  LophocComponent,
  SinhvienComponent,
  LichhocComponent,
  LichthiComponent,
  KetquaComponent,
  KhoanthuComponent,
  //HocphanComponent,
  
  ],
  imports: [ // khai báo các thư viện
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    menuModule,
    FormsModule,
    ToastModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,

    ConfirmDialogModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],

})
export class MainModule { }
