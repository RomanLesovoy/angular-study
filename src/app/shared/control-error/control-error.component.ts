import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-error.component.html',
  styleUrl: './control-error.component.scss'
})
export class ControlErrorComponent {
  @Input() control!: FormControl;
}
