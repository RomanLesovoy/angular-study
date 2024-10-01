import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { IInputProps, InputType } from './shared/Input.shared';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormBuilderModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'form-builder';

  elements: Array<IInputProps> = [
    {
      name: 'name',
      label: 'Type your name',
      onChange: () => {},
      type: InputType.Text,
      validations: [Validators.minLength(3), Validators.required],
    },
    {
      name: 'sex',
      label: 'Select your sex',
      onChange: () => {},
      type: InputType.Select,
      validations: [Validators.required],
      options: [
        { value: 'male', key: 'male', label: 'Male' },
        { value: 'female', key: 'female', label: 'Female' },
      ],
    },
    {
      name: 'hobby',
      label: 'Select your hobby',
      onChange: () => {},
      type: InputType.CheckBox,
      validations: [Validators.required],
      options: [
        { value: false, key: 'tennis', label: 'Tennis' },
        { value: false, key: 'footbal', label: 'Footbal' },
        { value: false, key: 'shooting', label: 'Shooting' },
      ],
    },
    {
      name: 'work',
      label: 'Select your work',
      onChange: () => {},
      type: InputType.Radio,
      validations: [Validators.required],
      options: [
        { value: false, key: 'programming', label: 'Programming' },
        { value: false, key: 'teaching', label: 'Teaching' },
        { value: false, key: 'art', label: 'Art' },
      ],
    },
  ]
}
