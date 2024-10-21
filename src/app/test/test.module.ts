import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestServiceService } from './test-service.service';


@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule,
  ],
  providers: [TestServiceService],
  exports: [TestComponentComponent]
})
export class TestModule { }
