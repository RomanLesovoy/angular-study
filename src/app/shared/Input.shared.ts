import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export enum InputType {
  Text = 'text',
  TextArea = 'textarea',
  Radio = 'radio',
  CheckBox = 'checkbox',
  Select = 'select',
}

export interface Option {
  value: string | boolean,
  key: string,
  label?: string,
} 

export interface IInputProps {
  label?: string,
  name: string,
  valueProp?: string,
  onChange: Function,
  type: InputType,
  validations?: Array<ValidatorFn>,
  formGroup?: FormGroup,
  options?: Array<Option>,
}

export type FieldValue = string | Array<Option>;

@Component({
  selector: 'app-input-shared',
  template: '',
})
export class InputShared implements OnInit {
  @Input() label?: string = '';
  @Input() name: string = '';
  @Input() type: InputType = InputType.Text;
  @Input() valueProp: string = '';
  @Input() validations: Array<ValidatorFn> = [];
  @Input() formGroup?: FormGroup;
  @Output() onChangeEvent = new EventEmitter<FieldValue>();

  public control: FormControl;

  constructor() {
    this.control = new FormControl(this.name, []);
  }

  get value(): FieldValue {
    return this.control.value;
  }

  set value(val: FieldValue) {
    this.control.setValue(val);
    this.onChangeEvent.emit(val);
  }

  ngOnInit(): void {
    this.control.setValue(this.valueProp);
    this.control.setValidators(this.validations);
    this.formGroup?.addControl(this.name, this.control);
  }

  // todo probably needs ngOnChanges if some props changed
}