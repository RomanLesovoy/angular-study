import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IInputProps, InputType } from '../shared/Input.shared';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {
  public form: FormGroup = null as unknown as FormGroup;
  public enumType: typeof InputType = InputType;
  @Input() elements: Array<IInputProps> = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group([]);
  }

  onSubmit() {
    const { controls } = this.form;
    console.info(controls)
  }
}
