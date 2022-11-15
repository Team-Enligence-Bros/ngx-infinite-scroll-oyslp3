//our root app component
import {
  AfterViewChecked,
  ElementRef,
  ViewChild,
  OnInit,
  Component,
} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
// for a pull req  fglfdf gfdgfd
const nisPackage = require('../../package.json');
// Again 
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
  words = ["def"]


  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  ngOnInit() {}

  constructor(private http: HttpClient) {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex: any, endIndex: any, _method: any) {
    for (let i = 0; i < this.sum; ++i) {
      this.generateWord()
      this.array[_method]([i, ' ', this.words[this.words.length - 1]].join(''));
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
    
    console.log(this.array)
    return this.http.get("http://ec2-15-207-248-162.ap-south-1.compute.amazonaws.com:3000/").subscribe(
      (data: any) => {
        this.words.push(data['data'])
      }
    )

  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}

interface Ans {
  data: string
}