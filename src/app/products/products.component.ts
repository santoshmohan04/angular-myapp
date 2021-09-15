import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  allowNewProducts = false;

  constructor() {
    setTimeout(() => {
      this.allowNewProducts = true;
    }, 2000);
  }

  ngOnInit() {}
}
