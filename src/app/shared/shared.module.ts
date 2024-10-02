import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { ControlErrorComponent } from './control-error/control-error.component';
import { InputShared } from './Input.shared';
import { DatabaseService } from './services/database.service';
import { TextInputComponent } from "./elements/text-input/text-input.component";
import { SelectInputComponent } from "./elements/select-input/select-input.component";
import { CheckboxInputComponent } from "./elements/checkbox-input/checkbox-input.component";

@NgModule({
  declarations: [
    InputShared,
  ],
  imports: [
    CommonModule,
    FormBuilderModule,
    ControlErrorComponent,
    TextInputComponent,
    SelectInputComponent,
    CheckboxInputComponent,
  ],
  exports: [
    TextInputComponent,
    SelectInputComponent,
    CheckboxInputComponent,
    FormBuilderModule,
    ControlErrorComponent,
    InputShared,
  ],
  providers: [
    DatabaseService,
  ]
})
export class SharedModule { }
