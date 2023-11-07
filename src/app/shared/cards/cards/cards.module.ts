import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { ButtonModule } from '../../button/button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsModalModule } from '../../cards-modal/cards-modal/cards-modal.module';




@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatDialogModule,
    CardsModalModule,
    
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule { }
