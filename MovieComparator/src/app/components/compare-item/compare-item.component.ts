import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compare-item',
  templateUrl: './compare-item.component.html',
  styleUrls: ['./compare-item.component.css']
})
export class CompareItemComponent implements OnInit {

  @Input() details;
  @Input() place;

  ratings = [];

  constructor() { }

  ngOnInit() {
    this.details.Ratings.forEach(rating => {
      this.ratings.push(rating);
    });
    console.log('Ratings');
    console.log(this.ratings);
    console.log(this.place);
  }

}
