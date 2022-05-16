import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // El decorador Input indica que recibe datos del padre
  @Input() product!: Product;

  // El decorador Output indica que emite un evento al padre
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
