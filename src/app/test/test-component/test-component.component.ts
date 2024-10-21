import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {
  constructor(private testService: TestServiceService) {
    console.log('injected', this.testService.id);
  }
}
