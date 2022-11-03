//our root app component
import {
  AfterViewChecked,
  ElementRef,
  ViewChild,
  OnInit,
  Component,
} from '@angular/core';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

const nisPackage = require('../../package.json');

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;
  array = [];
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

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }
  generateWord() {
    return chance.word();
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
