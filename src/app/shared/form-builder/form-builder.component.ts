import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { IInputProps, InputType } from '../Input.shared';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  public form: FormGroup = new FormGroup({});
  public enumType: typeof InputType = InputType;
  @Input() elements!: Array<IInputProps>;
  @Input() header?: string;
  @Output() onSubmit = new EventEmitter<{[key: string]: AbstractControl<any, any>}>();

  onSubmitFn() {
    const { controls } = this.form;
    this.onSubmit.emit(controls);
    this.form.reset();
  }
}
