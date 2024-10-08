import { Injectable } from '@angular/core';
import { delay, from, map, Observable, of, repeat, skip, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  constructor() { }

  private generateObject$(): Observable<Object> {
    return of({ data: 'data', text: 'text' }).pipe(
      delay(2000),
      repeat(3),
      // tap(console.log),
      map((o, i) => ({ ...o, text: `${o.text} number: ${i}` })),
    )
  }

  public getData1$(): Observable<Object> {
    return from(this.generateObject$()).pipe(
      take(1),
      tap((v) => console.log('tap 1', v)),
      map((o) => o)
    )
  }

  public getData2$(): Observable<Object> {
    return from(this.generateObject$()).pipe(
      skip(1),
      take(1),
      tap((v) => console.log('tap 2', v)),
      map((o) => o)
    )
  }

  public getData3$(): Observable<Object> {
    return from(this.generateObject$()).pipe(
      skip(2),
      take(1),
      tap((v) => console.log('tap 3', v)),
      map((o) => o)
    )
  }
}
