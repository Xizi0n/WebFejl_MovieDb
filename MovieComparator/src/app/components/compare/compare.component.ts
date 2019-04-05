import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  details = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.details = [];
    this.details = this.movieService.toCompare;
  }

}
