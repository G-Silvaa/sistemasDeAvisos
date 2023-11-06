import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { CardsModule } from '../cards/cards/cards.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsModalModule } from '../cards-modal/cards-modal/cards-modal.module';




@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CardsModalModule
    
    
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
