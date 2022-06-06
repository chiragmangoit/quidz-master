import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slider } from '../models/slider.model';
import { Headings } from '../models/heading.model';

@Component({
  selector: 'app-slider-recommend',
  templateUrl: './slider-recommend.component.html',
  styleUrls: ['./slider-recommend.component.css']
})
export class SliderRecommendComponent {
  
  head:Headings[] = [
    new Headings( 'Most Loved By Parents' ),
    new Headings( 'Editor’s Picks This Week' ),
    new Headings( 'Try Something New in 2021' ),
  ]

  slide:Slider[] = [
    new Slider( '../../assets/img/banner-ad/image_01.jpg', 'What we learn from cooking with children'),
    new Slider( '../../assets/img/banner-ad/image_02.jpg', 'Kidzania Back to school offer In Dubai'),
    new Slider( '../../assets/img/banner-ad/image_03.jpg', 'Pumpkin cooking party with children'),
    new Slider( '../../assets/img/banner-ad/image_04.jpg', 'Dubai events in july: DSS D3 Restaurant')
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

  