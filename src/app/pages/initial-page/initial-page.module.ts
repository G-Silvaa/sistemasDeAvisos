import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initialPAgeRoutingModule } from './initial-page-routing.module';
import { NavbarModule } from 'src/app/features/navbar/navbar.module';
import { InitialPageComponent } from './initial-page.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { CardsModule } from 'src/app/shared/cards/cards/cards.module';
import { MatDialogModule , MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    InitialPageComponent
  ],
  imports: [
    CommonModule,
    initialPAgeRoutingModule,
    NavbarModule,
    ButtonModule,
    CardsModule,
    MatDialogModule,
    MatButtonModule,
    
    
    
    
  ]
})
export class InitialPageModule { }
