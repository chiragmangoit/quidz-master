import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-recommend',
  templateUrl: './slider-recommend.component.html',
  styleUrls: ['./slider-recommend.component.css']
})
export class SliderRecommendComponent {
  
  value = 1;
  @Input() slides = [];
  @Output() newReadMoreEvent = new EventEmitter<number>();
  
  eventInformation() {
    this.newReadMoreEvent.emit(this.value);
  }
  
 customOptions: OwlOptions = {
  dots: false,
  loop: true,
  nav:true,
  navText: ['&#8249', '&#8250;'],
  margin: 25,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1229: {
      items: 4
    },
    1230: {
      items: 4
    }
   }
 }
}

  