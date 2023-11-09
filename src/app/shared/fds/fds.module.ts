import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdsComponent } from './fds.component';
import { InitialModalModule } from '../generic-modal/generic-modal-modal.module'

@NgModule({
  declarations: [
    FdsComponent
  ],
  imports: [
    CommonModule,
    InitialModalModule
  ]
})
export class FdsModule { }
