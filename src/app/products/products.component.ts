import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  allowNewProducts = false;
  usernameCreated = false;
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewProducts = true;
    }, 2000);
  }

  ngOnInit() {}

  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  onCreateUsername() {
    this.usernameCreated = true;
  }
}
