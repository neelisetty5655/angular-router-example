import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductinformationService } from './productinformation.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [ProductinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
