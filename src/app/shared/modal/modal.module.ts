import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { CardsModule } from '../cards/cards/cards.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
