import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { CardsModule } from '../cards/cards/cards.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardsModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
