import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { Product } from '../mockData';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.scss']
})
export class ProductEditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private snackBar: MatSnackBar
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  removeTag(tag: string): void {
    const index = this.data.tags.indexOf(tag);
    if (index >= 0) {
      this.data.tags.splice(index, 1);
    }
  }
}
