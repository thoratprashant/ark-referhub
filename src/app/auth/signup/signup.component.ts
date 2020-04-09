import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".next-step").click(function (e) {
      var $active = $('.stepper--indicator ul li.active');
      $active.next().addClass('active').siblings().removeClass('active');
      nextTab($active);
  });
  
   $(".prev-step").click(function (e) {
      var $active = $('.stepper--indicator ul li.active');
      $active.prev().addClass('active').siblings().removeClass('active')
      prevTab($active);
  });

  function nextTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.next().addClass('active').siblings().removeClass('active');
}
function prevTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.prev().addClass('active').siblings().removeClass('active');
}

  }

}
