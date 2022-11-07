//our root app component
import {
  AfterViewChecked,
  ElementRef,
  ViewChild,
  OnInit,
  Component,
} from '@angular/core';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
// for a pull req  fgl
const nisPackage = require('../../package.json');

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(ScrollToBottomDirective)
  scroll!: ScrollToBottomDirective;
  array: any[] = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  ngOnInit() {}

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex: any, endIndex: any, _method: any) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev: any = "") {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  onUp(ev: any = "") {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }
  generateWord() {
    return "Sandeep"
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
