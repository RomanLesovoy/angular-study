import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
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
    CardModule,
    DividerModule,
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
