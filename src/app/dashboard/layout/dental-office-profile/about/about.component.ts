import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".nav-item a").click(function(){
      var id = $(this).attr("id");

      if(id == 'about-tab'){
        $('.first--tab--extra--content').removeClass('hide')
      } else{
        $('.first--tab--extra--content').addClass('hide')
      }

  })
  }

}
