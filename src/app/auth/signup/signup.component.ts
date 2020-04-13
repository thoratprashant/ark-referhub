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

  headerNames = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  signUpStep = 0;

  ngOnInit(): void {
    $('#officeDentist').show();
    $('#mobileDentist').hide();
    $('#alreadyListed').hide();
    $('#sameOfficeExist').hide();
    $('#checkDentist').change(function () {
      if (this.checked) {
        $('#officeDentist').hide();
        $('#mobileDentist').show();
      } else {
        $('#officeDentist').show();
        $('#mobileDentist').hide();
      }
    });
    $('.add-me-btn').on('click', function () {
      $('#alreadyListed').show();
      $('#officeDentist').hide();
      $('#mobileDentist').hide();
    })
    $('.off-cancel-btn').on('click', function () {
      $('#sameOfficeExist').hide();
    })
    $("#officeName").keyup(function () {
      $('#sameOfficeExist').show();
    })
   
  
  
 

    /*$('body').on('click',".next-step",function (e) {
      console.log(this.signUpStep);
      if(this.signUpStep<=4 && this.signUpStep>=1){
        console.log('next step function executed');
        var $active = $('.stepper--indicator ul li.active');
        $active.next().addClass('active').siblings().removeClass('active');
        nextTab($active);

        var $active1 = $('#headerNames .steps--names.activated');
        $active1.next().addClass('activated').siblings().removeClass('activated');
      }

    })
    .on('click',".prev-step",function (e) {
      if(this.signUpStep<=4 && this.signUpStep>=1){
        console.log('prev step function executed');
        var $active = $('.stepper--indicator ul li.active');      
        $active.prev().addClass('active').siblings().removeClass('active')
        prevTab($active);


        var $active1 = $('#headerNames .steps--names.activated');
        $active1.prev().addClass('activated').siblings().removeClass('activated');
      }
    });

    function nextTab(elem) {
      const $tabactive = $('.tab-content .tab-pane.active');
      $tabactive.next().addClass('active').siblings().removeClass('active');
    }
    function prevTab(elem) {
      const $tabactive = $('.tab-content .tab-pane.active');
      $tabactive.prev().addClass('active').siblings().removeClass('active');
    }*/

  }

  nextTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.next().addClass('active').siblings().removeClass('active');
  }

  prevTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.prev().addClass('active').siblings().removeClass('active');
  }

  increaseStep(){ 

    if(this.signUpStep<=4 && this.signUpStep>=1){
      console.log('next step function executed');
      var $active = $('.stepper--indicator ul li.active');
      $active.next().addClass('active').siblings().removeClass('active');
      this.nextTab($active);

      var $active1 = $('#headerNames .steps--names.activated');
      $active1.next().addClass('activated').siblings().removeClass('activated');
    }
   
    this.signUpStep++;        
  }

  decreseStep(){
    if(this.signUpStep<=4 && this.signUpStep>=1){
      console.log('prev step function executed');
      var $active = $('.stepper--indicator ul li.active');      
      $active.prev().addClass('active').siblings().removeClass('active')
      this. prevTab($active);


      var $active1 = $('#headerNames .steps--names.activated');
      $active1.prev().addClass('activated').siblings().removeClass('activated');
    }
    this.signUpStep--;
    
  }

}
