// generic-modal.component.ts
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['generic-modal.component.scss']
})
export class genericmodalComponent {
  @Input() contentTemplate: any;

  constructor(public dialogRef: MatDialogRef<genericmodalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    // Lógica de salvar
    this.dialogRef.close(this.data);
  }
}
