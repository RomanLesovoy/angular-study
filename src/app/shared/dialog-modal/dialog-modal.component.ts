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
  private openedClassName = 'opened';

  @Input() titleProp!: string;
  @Input() openedProp!: boolean;
  @Input() setModalRef: Function = (ref: DialogModalComponent): void => {};
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  ngOnInit() {
    console.log(this.setModalRef, this)
    this.setModalRef(this);
  }

  private showHide() {
    !!this.openedProp ? this.openModal() : this.closeModal();
  }

  closeModal() {
    this.dialog.nativeElement.close();
    this.dialog.nativeElement.classList.remove(this.openedClassName);
  }

  openModal() {
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.classList.add(this.openedClassName);
  }

  ngOnChanges(changes: SimpleChanges) {
    const openedValue = changes['openedProp'];
    if (openedValue.previousValue !== openedValue.currentValue && this.dialog) {
      this.showHide();
    }
  }

  ngAfterViewInit(): void {
    this.showHide();
  }
}
