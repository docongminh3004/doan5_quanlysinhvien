import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { SinhvienGuard } from './auth/sinhvien.guard';




const routes: Routes = [
  // {path:"",component:HomeComponent},
  // {path:"home",component:HomeComponent},

  // {path:"student",component:StudentsComponent},
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule), canActivate: [AdminGuard]
  },

  //s
  {
    path: 'sinhvien',
    loadChildren: () => import('./main-sinhvien/main-sinhvien.module').then((m) => m.MainSinhviennModule),  canActivate: [SinhvienGuard]
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./login/login-admin/loginAdmin.module').then((m) => m.LoginAdminModule),
  },
  {
    path: 'sinhvien/login',
    loadChildren: () => import('./login/login-sinhvien/login-sinhvien.module').then((m) => m.LoginSinhvienModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
