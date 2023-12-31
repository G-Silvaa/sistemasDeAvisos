import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
