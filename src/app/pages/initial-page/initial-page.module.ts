import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initialPAgeRoutingModule } from './initial-page-routing.module';
import { NavbarModule } from 'src/app/features/navbar/navbar.module';
import { InitialPageComponent } from './initial-page.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { CardsModule } from 'src/app/shared/cards/cards/cards.module';




@NgModule({
  declarations: [
    InitialPageComponent
  ],
  imports: [
    CommonModule,
    initialPAgeRoutingModule,
    NavbarModule,
    ButtonModule,
    CardsModule
    
  ]
})
export class InitialPageModule { }
