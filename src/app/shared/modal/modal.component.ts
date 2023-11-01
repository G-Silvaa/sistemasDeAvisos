import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalModule } from './modal.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}
textoArea: string = ''
limitCaractere: number = 100

contacaracterer(){
  if(this.textoArea.length > this.limitCaractere){
    this.textoArea = this.textoArea.slice(0, this.limitCaractere)
  }
}
  
}


