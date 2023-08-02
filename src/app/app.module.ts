import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { AllFoodDetailsComponent } from './all-food-details/all-food-details.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { AppRoutingService } from './appRouting.service';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';
import { CategoriesService } from './categories.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodCategoriesComponent,
    AllFoodDetailsComponent,
    HomeStartComponent,
    SingleProductDetailComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    PolicyComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingService, FormsModule],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
