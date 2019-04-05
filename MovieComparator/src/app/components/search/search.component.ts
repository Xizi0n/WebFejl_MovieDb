import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription, timer, of, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  queryString = '';
  querySring$ = new BehaviorSubject(this.queryString);

  constructor(private movieService: MovieService, private  router: Router) {
  }

  ngOnInit() {
    this.querySring$.pipe(debounceTime(1000))
      .subscribe(qString => {
        if (qString !== '') {
          this.movieService.searchedPosters = [];
          console.log(this.queryString);
          this.movieService.getPosters(this.queryString).subscribe(posters => {
            posters.Search.forEach(element => {
              const temp = {
                image: element.Poster,
                title: element.Title,
                id: element.imdbID
              };
              this.movieService.searchedPosters.push(temp);
            });
            this.movieService.searchedPoster$.next(this.movieService.searchedPosters);
            this.router.navigateByUrl('/searchResult');
            console.log(this.movieService.searchedPosters);
          });
        }
      });
  }


  inputreceived() {
    console.log('Input Received');
    if (this.queryString !== '') {
      this.querySring$.next(this.queryString);
    }
  }

}
