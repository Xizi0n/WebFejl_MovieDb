import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-posterlistitem',
  templateUrl: './posterlistitem.component.html',
  styleUrls: ['./posterlistitem.component.css']
})
export class PosterlistitemComponent implements OnInit {

  @Input() poster;
  isInCompare = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  getDetails() {
    this.movieService.getDetails( this.poster.id ).subscribe( movieData => {
      console.log( movieData );
      this.movieService.toCompare.push(movieData);
      this.isInCompare = true;
      console.log(this.movieService.toCompare.length);
    });

  }

}
