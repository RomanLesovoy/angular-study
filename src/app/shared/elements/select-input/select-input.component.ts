import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputShared, Option } from '../../Input.shared';
import { ControlErrorComponent } from '../../control-error/control-error.component';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorComponent, InputTextModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent extends InputShared {
  @Input() options: Array<Option> = [];
}
