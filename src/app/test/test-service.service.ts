import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  public id = Math.random().toString(10);

  constructor() {
    console.log('id', this.id);
  }
}
