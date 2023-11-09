import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { genericmodalComponent } from '../../generic-modal/generic-modal-modal.component';
import { modalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardTitle: string = '';
  @Input() tituloInput: string = 'Adicione um Titulo';
  @Input() descricaoInput: string = 'Adicione uma descrição';
  @Input() background: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(genericmodalComponent, {
      data: {
        title: this.cardTitle,
        tituloInput: this.tituloInput,
        descricaoInput: this.descricaoInput,
        backgroundColor: this.background,
      },
     
    });

    // dialogRef.componentInstance.dadosAtualizados.subscribe((result: any) => {
    //   if (result) {
    //     this.tituloInput = result.tituloInput;
    //     this.descricaoInput = result.descricaoInput;
    //   }
    // });
  }
}
