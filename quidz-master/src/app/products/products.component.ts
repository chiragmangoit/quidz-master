import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<number>();
  @Input() amount:number;

  constructor() { }
  
  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() {
  }

}
