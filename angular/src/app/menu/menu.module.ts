import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    //LayoutAdminComponent
  ],
  imports: [
    FormsModule,
   
    CommonModule,
  
    ReactiveFormsModule,

  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
   
    CommonModule,
 
  ],
})
export class menuModule { }