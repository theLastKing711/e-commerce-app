import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  mainCarouselPhotos: string[] = [
   "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg",
  "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717OO5QwJnL._SX3000_.jpg",
  "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61jovjd+f9L._SX3000_.jpg"
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
