import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit, AfterViewInit {

  @Input() photos: string [] = [];

  isPrevButtonActive: boolean = false;
  isNextButtonActive: boolean = false;



  activePhotoIndex: number = 0;
  lastActivePhotoIndex: number = this.activePhotoIndex;

  constructor(private renderer: Renderer2) { }

  @ViewChild("image") image!: ElementRef<HTMLElement>;

  @ViewChild("carousel") carousel!: ElementRef<HTMLElement>;


  getElementHeight(element: ElementRef): number {

    const elementHeight = element?.nativeElement?.offsetHeight;

    return elementHeight;
  }

  getElementHeightInPx(element: ElementRef): string {

    const elementHeight = element?.nativeElement?.offsetHeight;

    return this.convertNumberToPx(elementHeight)
  }


  getElementWidth(element: ElementRef): number {
    const imageWidth = element.nativeElement?.offsetWidth;

    return imageWidth;
  }

  getElementWidthInPx(element: ElementRef): string {

    const imageWidth = this.getElementWidth(element);

    return this.convertNumberToPx(imageWidth);

  }


  getImageMarginBottom(ref: ElementRef): number {
    const marginOffset =  -(ref.nativeElement.offsetHeight * (75 / 100))
    return marginOffset;
  }


  getImageMarginBottomInPx(ref: ElementRef): string {
    const imageBottomMargin = this.getImageMarginBottom(ref)

    return this.convertNumberToPx(imageBottomMargin)

  }

  convertNumberToPx(value: number): string {
    return value.toString() + "px"
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
        const imageHeightInPx = this.getElementHeightInPx(this.image);
        const imageWidth = this.getElementWidth(this.image);
        const imageBottomOffseIntPx = this.getImageMarginBottomInPx(this.image);

        console.log("first image", imageHeightInPx)


        this.renderer.setStyle(this.carousel.nativeElement, 'height', imageHeightInPx)

        if(imageWidth >= 768)
        {
          this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', imageBottomOffseIntPx)
        }

        addEventListener('resize', () =>
        {


          const imageHeightInPx = this.getElementHeightInPx(this.image);
          const imageWidth = this.getElementWidth(this.image);
          const imageBottomOffseIntPx = this.getImageMarginBottomInPx(this.image);

          console.log("first image", imageHeightInPx)

          this.renderer.setStyle(this.carousel.nativeElement, 'height', imageHeightInPx)

          if(imageWidth >= 768)
          {
            this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', imageBottomOffseIntPx)
          }
          else
          {
            this.renderer.setStyle(this.carousel.nativeElement, 'margin-bottom', "0px")
          }

        })

  }

  next<T>(mainIndex: number, list: T[])
  {

    if(this.isLastItem(mainIndex, list))
    {
      return 0;
    }

    return mainIndex + 1;
  }

  prev<T>(mainIndex: number, list: T[])
  {

    if(this.isFirstItem(mainIndex))
    {
      return list.length - 1;
    }

    return mainIndex - 1;
  }

  isItemActive<T>(mainIndex: number, itemIndex: number)
  {
    return mainIndex == itemIndex;
  }

  isItemNext<T>(mainIndex: number, itemIndex: number, list: T[])
  {
    if(this.isFirstItem(itemIndex) && this.isLastItem(mainIndex, list) )
      return true;

    return (mainIndex + 1 == itemIndex)
  }

  isItemPrevious<T>(mainIndex: number, itemIndex: number, list: T[])
  {

    if(this.isLastItem(itemIndex, list) && this.isFirstItem(mainIndex))
      return true;

    return (mainIndex - 1) == itemIndex;
  }

  isItemHidden<T>(mainIndex: number, itemIndex: number, list: T[])
  {
    return ! this.isItemActive(mainIndex, itemIndex)
        &&
      ! this.isItemNext(mainIndex, itemIndex, list)
      &&
      ! this.isItemPrevious(mainIndex, itemIndex, list)
  }

  isLastItem<T>(itemIndex: number, list: T[])
  {
    return itemIndex == list.length - 1;
  }

  isFirstItem<T>(itemIndex: number)
  {
    return itemIndex == 0;
  }


}
