import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputShared, InputType, Option } from '../../shared/Input.shared';
import { ControlErrorComponent } from "../../shared/control-error/control-error.component";

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ControlErrorComponent],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.scss'
})
export class CheckboxInputComponent extends InputShared {
  private isCheckbox = this.type === InputType.CheckBox;
  @Input() options: Array<Option> = [];

  onChange(e: Event, key: string) {
    const optionChanged = [...this.options].find((o) => o.key === key)!;
    optionChanged.value = Boolean((e.target as HTMLInputElement).checked);
    this.value = this.isCheckbox ? [...this.options] : [optionChanged];
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.isCheckbox = this.type === InputType.CheckBox;
    this.value = this.isCheckbox ? [...this.options] : [this.options.find((o) => !!o.value) as Option];
  }

  // todo probably needs ngOnChanges if some props changed
}
