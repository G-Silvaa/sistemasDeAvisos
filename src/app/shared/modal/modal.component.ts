import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
   {

  }
textoArea: string = ''
limitCaractere: number = 160

contacaracterer(event: any){
  if(this.textoArea.length > this.limitCaractere){
    event.target.value = event.target.value.slice(0, this.limitCaractere)
    
  }
}
  
}


