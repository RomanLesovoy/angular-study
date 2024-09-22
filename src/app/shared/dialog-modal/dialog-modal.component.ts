import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent {
  @Input() titleProp!: string;
  @Input() openedProp!: boolean;
  @Input() setModalRef: Function = (ref: DialogModalComponent): void => {};
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  public get openedClassName() { return 'opened' };

  ngOnInit(): void {
    this.setModalRef(this);
  }

  private showHide(): void {
    !!this.openedProp ? this.openModal() : this.closeModal();
  }

  closeModal(): void {
    this.dialog.nativeElement.close();
    this.dialog.nativeElement.classList.remove(this.openedClassName);
  }

  openModal(): void {
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.classList.add(this.openedClassName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const openedValue = changes['openedProp'];
    if (openedValue.previousValue !== openedValue.currentValue && this.dialog) {
      this.showHide();
    }
  }

  ngAfterViewInit(): void {
    this.showHide();
  }
}
