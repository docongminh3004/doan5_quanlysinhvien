import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';

import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { MainSinhvienComponent } from './main-sinhvien/main-sinhvien.component';
import { LoginSinhvienComponent } from './login/login-sinhvien/login-sinhvien.component';


@NgModule({
  declarations: [
    AppComponent,
  
    // MainSinhvienComponent,
   
 //   MenuComponent,
    
    //zzMainComponent,
    //LoginComponent,
  //  LoginAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
