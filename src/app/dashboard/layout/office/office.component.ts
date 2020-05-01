import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

  beforeAfterBtn = true;
  beforeAfterImage = false;
  addComplitedCases = true;
  complitedCases = false;

  constructor() { }

  ngOnInit(): void {
    $('#officeTabs li a').on('click',function(){
      var title = $(this).attr('headerNames');
      $('#officeHeaderName').text(title)
      console.log(title)
  });
  }

  addImages() {    
    this.beforeAfterBtn = false;
    this.beforeAfterImage = true;
  }
  showComplitedCases() {    
    this.addComplitedCases = false;
    this.complitedCases = true;
  }


}
