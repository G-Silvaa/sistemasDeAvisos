import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { modalComponent } from 'src/app/shared/modal/modal.component';
import { ModalModule } from 'src/app/shared/modal/modal.module';







@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent {
  constructor(public dialog: MatDialog) {}

  

 
}
  

