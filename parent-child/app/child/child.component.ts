import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  count = 1;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  // tslint:disable-next-line:member-ordering
  @Input() c1: number;

}
