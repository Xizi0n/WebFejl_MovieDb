import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-poesterlist',
  templateUrl: './poesterlist.component.html',
  styleUrls: ['./poesterlist.component.css']
})
export class PoesterlistComponent implements OnInit {

  posters = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPosters().subscribe( posters  => {
      posters.Search.forEach(element => {
        const temp = {
          image: element.Poster,
          title: element.Title,
          id: element.imdbID
        };
        this.posters.push(temp);
      });
      console.log(this.posters);
    });
  }

}
