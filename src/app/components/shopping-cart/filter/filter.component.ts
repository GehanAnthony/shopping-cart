import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterData: EventEmitter<any> = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  filterProducts(min: number, max: number) {
    this.filterData.emit({ min: min, max: max });
  }
}
