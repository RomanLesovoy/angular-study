import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { GeneralDataService } from '../../general-data.service';
import { mergeMap, Subscription, from, toArray } from 'rxjs';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';

@Component({
  selector: 'app-modal-data',
  standalone: true,
  imports: [CommonModule, DialogModalComponent, NgxLoaderIndicatorDirective],
  templateUrl: './modal-data.component.html',
  styleUrl: './modal-data.component.scss'
})
export class ModalDataComponent implements OnDestroy {
  public allData: Array<{ text: string }> = [];
  private subscription: Subscription;
  public isLoading: boolean;

  constructor(public readonly dataService: GeneralDataService) {
    this.isLoading = true;
    this.subscription = from([ // zip like Promise.all
      this.dataService.getData1$(),
      this.dataService.getData2$(),
      this.dataService.getData3$(),
    ])
      .pipe(
        mergeMap(ids => ids), // not needed if created from zip \ fork
        toArray(), // not needed if created from zip \ fork
      )
      .subscribe((res) => {
        this.allData = res as Array<{ text: string }>;
        this.isLoading = false;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
