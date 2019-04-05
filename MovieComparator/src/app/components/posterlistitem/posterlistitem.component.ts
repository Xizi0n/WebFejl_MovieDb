import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posterlistitem',
  templateUrl: './posterlistitem.component.html',
  styleUrls: ['./posterlistitem.component.css']
})
export class PosterlistitemComponent implements OnInit {

  @Input() poster;

  constructor() { }

  ngOnInit() {
  }

}
