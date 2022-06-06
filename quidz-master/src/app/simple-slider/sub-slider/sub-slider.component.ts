import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sub-slider',
  templateUrl: './sub-slider.component.html',
  styleUrls: ['./sub-slider.component.css']
})
export class SubSliderComponent {

  constructor() { }
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout:2000,
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
