import { Component, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dayTwo';
  counter = 5;
  counter2 = 0;
  // @ViewChildren(ChildComponent) test: ChildComponent;
  @ViewChild(ChildComponent, {static: false}) test: ChildComponent;
  increment() {
    this.test.increment();
    this.counter++;
    console.log('clicked');
  }
  decrement() {
    this.test.decrement();
    this.counter--;
  }

  countChangedHandler(count: number) {
    this.counter2 = count;
    console.log(count);
  }




}
