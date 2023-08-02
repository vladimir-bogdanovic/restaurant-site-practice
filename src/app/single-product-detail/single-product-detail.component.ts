import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categories } from '../shared/categories';
import { Category } from '../shared/category';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: Category;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.singleProduct = Categories.find(
      (product: Category) => product.name === this.route.snapshot.params['name']
    );
    // console.log(this.singleProduct);
  }

  toCategoriesButton() {
    this.router.navigate(['/categories']);
  }
}
