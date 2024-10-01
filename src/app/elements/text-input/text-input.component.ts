import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputShared } from '../../shared/Input.shared';
import { FieldsetModule } from 'primeng/fieldset';
import { ControlErrorComponent } from "../../shared/control-error/control-error.component";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, FieldsetModule, ReactiveFormsModule, ControlErrorComponent, InputTextModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent extends InputShared {

}
