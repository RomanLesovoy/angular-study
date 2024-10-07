import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListenerDirective } from './directives/HostListener.directive';
import { concatMap, debounce, distinctUntilChanged, filter, interval, map, Observable, Observer, of, skip, takeWhile, tap } from 'rxjs';
import CanvasLauncher from './canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HostListenerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-training';
  observer$: Observer<any> | null = null;
  observable$: Observable<any> = new Observable(observer => {
    this.observer$ = observer;
  });

  constructor () {
    let result = '';
    this.observable$
      // .pipe(map(v => v.target.value as string))
      // .pipe(tap(console.log))
      .pipe(
        skip(1), // skip first
        map(v => v.data as string),
        tap(console.log),
        // concatMap(v => of(v).pipe(map((v: string) => v += '1'))) // concatMap - to join Observables
        map(v => v += '1'),
        distinctUntilChanged(), // checks new value different from previous one
      )
      // .pipe(debounce(i => interval(1000))) // for async request
      // .pipe(take(2)) // only 2 calls
      // .pipe(takeWhile(v => v.length < 5)) // instead of filter
      // .pipe(takeUntil(<observer>)) // works until event in observer
      .subscribe((eventData) => {
        result += eventData
        console.log('result', result)
      })
  }

  ngAfterViewInit(): void {
    CanvasLauncher();
  }
}
