import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductInterface } from 'src/app/models/products.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productsList: ProductInterface[] = [];
  subscription!: Subscription;

  constructor(private requestService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getProducts() {
    this.subscription = this.requestService.getApiProducts().subscribe((list: ProductInterface[]) => {
      this.productsList = list;
      console.log(this.productsList);

    });
  }


}

