import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-cards-modal',
  templateUrl: './cards-modal.component.html',
  styleUrls: ['./cards-modal.component.scss']
})
export class CardsModalComponent {
  

  @Input() cardTitle: string = '';
  @Input() tituloInput:string = 'Adicione um Titulo';
  @Input() descricaoInput: string = 'Adicione uma descrição';
  
  
  
  constructor(public dialog: MatDialog) {
    
  }


 
  
}
