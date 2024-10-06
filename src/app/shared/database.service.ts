import { Injectable } from '@angular/core';
import { products } from './data.demo';
import { BehaviorSubject, concatMap, delay, tap, from, Observable, of, concat, mergeMap, switchMap, take, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  get<T>(key: string): Promise<T> {
    return new Promise((res, rej) => {
      const waitTime = Math.random() * 3000;
      const shouldThrowError = Math.random() < 0.1; // Error posibility

      setTimeout(() => {
        if (shouldThrowError) {
          return rej('get data Error')
        } 
        
        try {
          const storageData = localStorage.getItem(key);
          const result = storageData ? JSON.parse(storageData) : products;
          res(result);
        } catch {
          return rej('error parsing')
        }
      }, waitTime)
    })
  }

  getObservable<T>(key: string): { observable: Observable<T>, subject: Subject<T> } {
    try {
      const storageData = localStorage.getItem(key);
      const result: T = storageData ? JSON.parse(storageData) : products;
      const sub = new Subject<T>();
     
      setTimeout(() => {
        Array.isArray(result)
          ? result.forEach((i) => sub.next(i))
          : sub.next(result);
      })

      return {
        subject: sub,
        observable: sub
          .pipe(concatMap((r) => of(r).pipe(delay(Math.random() * 1000)))),
      }
    } catch {
      // @ts-ignore @todo
      return from([{ error: 'failed to parse' }] as ArrayLike<T>)
    }
  }

  execute<T>(key: string, body: T): Promise<T> {
    return new Promise((res, rej) => {
      const waitTime = Math.random() * 3000;
      const shouldThrowError = Math.random() < 0.1; // Error posibility

      setTimeout(() => {
        if (shouldThrowError) {
          return rej('execute error')
        } 
        
        localStorage.setItem(key, JSON.stringify(body));
        res(body);
      }, waitTime);
    });
  }
}
