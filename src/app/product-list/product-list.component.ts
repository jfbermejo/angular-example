import { Component } from '@angular/core';

import { products } from '../products';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(private logger: LogService) {}

  share() {
    window.alert('The product has been shared!');
    this.logger.log('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
    this.logger.log('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
