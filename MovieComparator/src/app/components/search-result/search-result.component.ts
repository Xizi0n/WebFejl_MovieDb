import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  posters;

  constructor(private movieService: MovieService) {

    this.posters = this.movieService.searchedPosters;
    this.movieService.searchedPoster$.subscribe( freshposters => {
      console.log('Triggered');
      this.posters = [];
      this.posters = freshposters;
      console.log(this.posters);
    });

  }


  ngOnInit() {
  }

}
