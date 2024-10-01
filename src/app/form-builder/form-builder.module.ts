import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder.component';
import { TextInputComponent } from "../elements/text-input/text-input.component";
import { SelectInputComponent } from "../elements/select-input/select-input.component";
import { CheckboxInputComponent } from "../elements/checkbox-input/checkbox-input.component";

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    TextInputComponent,
    ReactiveFormsModule,
    SelectInputComponent,
    ButtonModule,
    CheckboxInputComponent,
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
