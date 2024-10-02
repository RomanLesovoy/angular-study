import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  get<T>(key: string): Promise<T> {
    return new Promise((res, rej) => {
      const waitTime = Math.random() * 3000;
      const shouldThrowError = Math.random() < 0.1;

      setTimeout(() => {
        if (shouldThrowError) {
          return rej('get data Error')
        } 
        
        try {
          const storageData = localStorage.getItem(key);
          const result = storageData ? JSON.parse(storageData) : [];
          res(result);
        } catch {
          return rej('error parsing')
        }
      }, waitTime)
    })
  }

  execute<T>(key: string, body: T): Promise<T> {
    return new Promise((res, rej) => {
      const waitTime = Math.random() * 3000;
      const shouldThrowError = Math.random() < 0.1;

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
