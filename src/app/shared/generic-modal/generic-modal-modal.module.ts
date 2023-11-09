import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../button/button.module';
import { genericmodalComponent } from './generic-modal-modal.component';
import { CardsModule } from '../cards/cards/cards.module';

@NgModule({
  declarations: [genericmodalComponent],
  imports: [CommonModule, ButtonModule, CardsModule],
  exports: [genericmodalComponent]
})
export class InitialModalModule {}
