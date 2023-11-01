import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardTitle: string = '';

  constructor(public dialog: MatDialog) {}

  

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      data: {
        title: this.cardTitle 
      }
     
    });
  }
}
