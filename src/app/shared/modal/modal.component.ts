import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class modalComponent {
  tituloInput: string;
  descricaoInput: string;
  cardClass: string = '';
  

  constructor(public dialogRef: MatDialogRef<modalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
    
    )
   {this.tituloInput = data.tituloInput;
    this.descricaoInput = data.descricaoInput
    this.cardClass = data.cardClass
  }
    
textoArea: string = ''
limitCaractere: number = 160

contacaracterer(event: any){
  if(this.textoArea.length > this.limitCaractere){
    event.target.value = event.target.value.slice(0, this.limitCaractere)
   
  }
}

closeDialog() {
  this.dialogRef.close();
}
  
@Output() dadosAtualizados = new EventEmitter<any>()


}

