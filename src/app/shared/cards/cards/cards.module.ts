import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { ButtonModule } from '../../button/button.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatDialogModule
    
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule { }
