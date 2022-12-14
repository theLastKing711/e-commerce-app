import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-preview-card',
  templateUrl: './category-preview-card.component.html',
  styleUrls: ['./category-preview-card.component.scss']
})
export class CategoryPreviewCardComponent implements OnInit {

  @Input() title!: string;
  @Input() image!: string;
  @Input() categoryId!: number;


  constructor() { }

  ngOnInit(): void {
    console.log("image", this.image);
  }

}
