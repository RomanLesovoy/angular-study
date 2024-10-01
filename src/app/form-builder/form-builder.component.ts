import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputProps, InputType } from '../shared/Input.shared';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  public form: FormGroup = new FormGroup({});
  public enumType: typeof InputType = InputType;
  @Input() elements!: Array<IInputProps>;

  onSubmit() {
    const { controls } = this.form;
    console.info(controls)
  }
}
