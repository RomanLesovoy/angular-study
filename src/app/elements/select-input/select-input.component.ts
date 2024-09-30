import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputShared, Option } from '../../shared/Input.shared';
import { FieldsetModule } from 'primeng/fieldset';
import { ControlErrorComponent } from "../../shared/control-error/control-error.component";

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorComponent, FieldsetModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent extends InputShared {
  @Input() options: Array<Option> = [];
}
