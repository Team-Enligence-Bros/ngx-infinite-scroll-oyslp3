import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

declare const chance;

@NgModule({
  imports: [BrowserModule, FormsModule, InfiniteScrollModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ModalComponent,
    ScrollToBottomDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
