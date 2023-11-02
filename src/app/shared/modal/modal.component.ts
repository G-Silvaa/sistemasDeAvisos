import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  tituloInput: string;
  descricaoInput: string;
  @Output() dadosAtualizados = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
    )
   {this.tituloInput = data.tituloInput;
    this.descricaoInput = data.descricaoInput
    
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

salvar() {
  this.data.tituloInput = this.tituloInput;
  this.data.descricaoInput = this.descricaoInput;
  this.dadosAtualizados.emit(this.data); 
  this.dialogRef.close(this.data);
}

}


