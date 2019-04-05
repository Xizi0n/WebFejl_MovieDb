import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { PoesterlistComponent } from './components/poesterlist/poesterlist.component';
import { PosterlistitemComponent } from './components/posterlistitem/posterlistitem.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CompareComponent } from './components/compare/compare.component';
import { CompareItemComponent } from './components/compare-item/compare-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    PoesterlistComponent,
    PosterlistitemComponent,
    SearchComponent,
    SearchResultComponent,
    CompareComponent,
    CompareItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
