import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  constructor() { }
  customOptions: OwlOptions = {
    autoplay: false,
    dots: false,
    loop: true,
    nav:true,
    navText: ['&#8249', '&#8250;'],
    margin: 25,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1229: {
        items: 4
      },
      1230: {
        items: 6
      }
    },
  }
}
