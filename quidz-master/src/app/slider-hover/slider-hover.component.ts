import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slider } from '../models/slider.model';

@Component({
  selector: 'app-slider-hover',
  templateUrl: './slider-hover.component.html',
  styleUrls: ['./slider-hover.component.css']
})
export class SliderHoverComponent  {

  dynamicSlide:Slider[] = [
    new Slider( '../../assets/img/banner-ad/bc_img_01.jpg', 'What we learn from cooking with children'),
    new Slider( '../../assets/img/banner-ad/bc_img_02.jpg', 'Kidzania Back to school offer In Dubai'),
    new Slider( '../../assets/img/banner-ad/bc_img_03.jpg', 'Pumpkin cooking party with children'),
    new Slider( '../../assets/img/banner-ad/bc_img_01.jpg', 'Dubai events in july: DSS D3 Restaurant')
  ]

  constructor() { }
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