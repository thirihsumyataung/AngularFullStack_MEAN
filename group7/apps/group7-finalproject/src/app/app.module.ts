import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomepageComponent, ProductlistComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
