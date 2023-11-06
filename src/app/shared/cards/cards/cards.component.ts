import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardTitle: string = '';
  @Input() tituloInput:string = 'Adicione um Titulo';
  @Input() descricaoInput: string = 'Adicione uma descrição';
  
  
  constructor(public dialog: MatDialog) {
    
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: this.cardTitle, 
        tituloInput: this.tituloInput, 
        descricaoInput: this.descricaoInput,
        
       
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.tituloInput = result.tituloInput;
        this.descricaoInput = result.descricaoInput;
      }
    });
  }
}
