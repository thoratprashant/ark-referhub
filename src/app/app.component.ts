import { Component } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refer-hub-ark';

  ngOnInit(){
    $(window).scroll(function () {
      var sc = $(window).scrollTop()
    if (sc > 0) {
        $(".rf--header").addClass("scrolled");
        $('.back--to--top').addClass('show');
    } else {
        $(".rf--header").removeClass("scrolled");
        $('.back--to--top').removeClass('show');
    }
  })

  $(document).ready(function(){
    $('.back--to--top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  });
  }
}
