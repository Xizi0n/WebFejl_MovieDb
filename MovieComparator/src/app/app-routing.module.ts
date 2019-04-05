import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PoesterlistComponent } from './components/poesterlist/poesterlist.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CompareComponent } from './components/compare/compare.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'posterlist', component: PoesterlistComponent},
  {path: 'searchResult', component: SearchResultComponent},
  {path: 'compare', component: CompareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
