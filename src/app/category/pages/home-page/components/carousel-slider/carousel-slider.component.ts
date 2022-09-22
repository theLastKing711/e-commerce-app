import { ElementsManipulationService } from 'src/app/category/services/elements-manipulation.service';
import { CarouselPaginationService } from 'src/app/category/services/carousel-pagination.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements  AfterViewInit {

  @Input() photos: string [] = [];

  isPrevButtonActive: boolean = false;
  isNextButtonActive: boolean = false;



  activePhotoIndex: number = 0;
  lastActivePhotoIndex: number = this.activePhotoIndex;

  constructor(private renderer: Renderer2, public carouselPagination: CarouselPaginationService, public elementManiplation: ElementsManipulationService) { }

  @ViewChild("image") image!: ElementRef<HTMLElement>;

  @ViewChild("carousel") carousel!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
        const imageHeightInPx = this.elementManiplation.getElementHeightInPx(this.image);
        const imageWidth = this.elementManiplation.getElementWidth(this.image);
        const imageBottomOffseInPx = this.elementManiplation.getElementMarginBottomInPx(this.image, 60);

        console.log("first image", imageHeightInPx)


        this.renderer.setStyle(this.carousel.nativeElement, 'height', imageHeightInPx)

        if(imageWidth >= 768)
        {
          this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', imageBottomOffseInPx)
        }

        addEventListener('resize', () =>
        {


          const imageHeightInPx = this.elementManiplation.getElementHeightInPx(this.image);
          const imageWidth = this.elementManiplation.getElementWidth(this.image);
          const imageBottomOffseInPx = this.elementManiplation.getElementMarginBottomInPx(this.image, 60);

          console.log("first image", imageHeightInPx)

          this.renderer.setStyle(this.carousel.nativeElement, 'height', imageHeightInPx)

          if(imageWidth >= 768)
          {
            this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', imageBottomOffseInPx)
          }
          else
          {
            this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', "2rem")
          }

        })

  }



}
