import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-prime-paginator',
  templateUrl: './custom-prime-paginator.component.html',
  styleUrls: ['./custom-prime-paginator.component.scss']
})
export class CustomPrimePaginatorComponent implements OnInit {

  @Input() rows!: number;
  @Input() totalRecords!: number;
  @Input() pageNumber!: number;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(event: {page: number ,first: number, rows: number, pageCount: number})
  {
    this.onPageChange.emit(event.page);
  }

}
