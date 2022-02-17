import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    ListarComponent
  ],
  exports: [
    ListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
