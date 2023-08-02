import { Component, OnInit } from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-foodcategories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})
export class FoodCategoriesComponent implements OnInit {
  sortFromAToZ: boolean = true;
  categories: Category[] = Categories;
  searchForm = new FormGroup({
    search: new FormControl(),
  });

  get formData() {
    return this.searchForm.get('search');
  }

  constructor(private router: Router, private sorting: SortingService) {}

  ngOnInit() {
    this.formData.valueChanges.subscribe((input: string) => {
      this.categories = Categories.filter((categoryData: Category): boolean => {
        const inputValue = input.toLowerCase();
        return (
          categoryData.name.toLowerCase().includes(inputValue) ||
          // categoryData.description.toLowerCase().includes(inputValue) ||
          categoryData.id.toString().includes(inputValue)
        );
      });
    });
  }

  sortingByName() {
    if (this.sortFromAToZ) {
      this.sorting.sortingByNameA(this.categories);
      this.sortFromAToZ = false;
    } else {
      this.sorting.sortingByNameZ(this.categories);
      this.sortFromAToZ = true;
    }
  }

  onClickDetail(name: string) {
    this.router.navigate(['/categories', name]);
  }
}
