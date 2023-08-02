import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllFoodDetailsComponent } from './all-food-details/all-food-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolicyComponent } from './policy/policy.component';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeStartComponent },
  { path: 'categories', component: FoodCategoriesComponent },
  { path: 'categories/:name', component: SingleProductDetailComponent },
  { path: 'details', component: AllFoodDetailsComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingService {}
