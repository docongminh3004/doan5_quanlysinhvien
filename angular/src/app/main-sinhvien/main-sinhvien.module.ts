import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from '../menu/menu.component';
import { menuModule } from '../menu/menu.module';

//
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MainSinhvienComponent } from './main-sinhvien.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { KetquahoctapComponent } from './ketquahoctap/ketquahoctap.component';
import { LichthiComponent } from './lichthi/lichthi.component';
import { LichhocComponent } from '../main/lichhoc/lichhoc.component';
import { LichhocsinhvienComponent } from './lichhocsinhvien/lichhocsinhvien.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { KhoanthusinhvienComponent } from './khoanthusinhvien/khoanthusinhvien.component';
import { KekhaivacxinComponent } from './kekhaivacxin/kekhaivacxin.component';

//import { HocphanComponent } from './hocphan/hocphan.component';
//

export const mainRoutes: Routes = [

  {
    path: '',
    component: MainSinhvienComponent,
    children: [
      
  
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'ketquahoctap/:masv', component: KetquahoctapComponent
      },
      {
        path: 'lichthi', component: LichthiComponent
      },
      {
        path: 'lichhoc', component:LichhocsinhvienComponent 
      },
      {
        path: 'tintuc', component:TintucComponent
      },
      {
        path: 'khoanthusinhvien', component:KhoanthusinhvienComponent
      },
      {
        path: 'kekhaivacxin', component:KekhaivacxinComponent
      },
      //
    

   
    ],
    //

  },
];

@NgModule({
  declarations: [
    MainSinhvienComponent,
    DashboardComponent,
    ProfileComponent,
    KetquahoctapComponent,
    LichthiComponent,
    LichhocsinhvienComponent,
    TintucComponent,
    KhoanthusinhvienComponent,
    KekhaivacxinComponent,
    
  

  
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    menuModule,
    FormsModule,
    ToastModule,
    
    ConfirmDialogModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],

})
export class MainSinhviennModule { }
