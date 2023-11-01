import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { ButtonModule } from '../../button/button.module';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    ButtonModule
    
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule { }
