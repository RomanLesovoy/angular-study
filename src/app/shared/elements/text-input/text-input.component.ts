import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputShared, InputType } from '../../Input.shared';
import { ControlErrorComponent } from '../../control-error/control-error.component';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorComponent, InputTextModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent extends InputShared {
  public enumType: typeof InputType = InputType;
}
