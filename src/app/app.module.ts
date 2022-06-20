import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { PlaceComponent } from './components/place/place.component';
import { AddNewPartComponent } from './components/add-new-part/add-new-part.component';
import { UpdatePartComponent } from './components/update-part/update-part.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    PlaceComponent,
    AddNewPartComponent,
    UpdatePartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
