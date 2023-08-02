import { Component } from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';

@Component({
  selector: 'app-all-food-details',
  templateUrl: './all-food-details.component.html',
  styleUrls: ['./all-food-details.component.css'],
})
export class AllFoodDetailsComponent {
  categories: Category[] = Categories;
}
