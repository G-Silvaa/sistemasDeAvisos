import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { CardsModule } from '../cards/cards/cards.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsModalModule } from '../cards-modal/cards-modal/cards-modal.module';
import { InitialModalModule } from '../generic-modal/generic-modal-modal.module'




@NgModule({
  declarations: [
    modalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CardsModalModule,
    InitialModalModule
    
    
    
  ],
  exports: [
    modalComponent
  ]
})
export class ModalModule { }
