import { Component,HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { dynamicSlides } from './models/carousel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carousel = dynamicSlides;
  itemAmount:number;
  cartValue:number;
  showMore:number;
  pageYoffset = 0;

  addItem( newItem:number ) {
    this.itemAmount = newItem;
    this.cartAmount();
  }

  increase(){
    this.itemAmount++;
    this.cartAmount();
  }

  decrease(){
    if (this.itemAmount >= 1) {   
      this.itemAmount--;
      this.cartAmount();
    }
  }

  cartAmount(){
    this.cartValue = 20 * this.itemAmount;
  }

  showInfo(value:number){
    this.showMore = value;
  }

  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }
  constructor( private scroll: ViewportScroller ) { }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
