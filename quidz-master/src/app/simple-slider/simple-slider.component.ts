import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-simple-slider',
  templateUrl: './simple-slider.component.html',
  styleUrls: ['./simple-slider.component.css']
})
export class SimpleSliderComponent {

  constructor() { }
  customOptions: OwlOptions = {
    autoplay: true,
    dots: true,
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
        items: 3
      },
      1230: {
        items: 3
      }
    }
  }
}
