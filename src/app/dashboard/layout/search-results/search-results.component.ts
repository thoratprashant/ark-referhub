import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  status: boolean = true;


  minValue: number = 10;
  maxValue: number = 40;
  options: Options = {
    floor: 0,
    ceil: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>miles</b>';
        case LabelType.High:
          return value + '<b>miles</b>';
          default:
          return '' + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }


  togglefilterBtn(){
    this.status = !this.status;      
  }

}
