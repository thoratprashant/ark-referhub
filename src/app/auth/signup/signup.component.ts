import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
import { HttpService } from '../../services/http.service';
import { DentistSignupStage1 } from '../../models/DentistSignupStage1';
import { DentistSignupStage2 } from '../../models/DentistSignupStage2';
import { DentistSignupStage3 } from '../../models/DentistSignupStage3';
import { DentistSignupStage4 } from '../../models/DentistSignupStage4';
import { OfficeSchema } from '../../models/DentistSignupStage2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpStep = 0;
  images = '';
  uploadSuccess = false;
  constructor(private httpService: HttpService, private snackBar: MatSnackBar, ) {
    console.log(this.signUpStep);
    this.signUpStep = 1;
  }

  headerNames = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  stage1: DentistSignupStage1 = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    type: 'dentist',
    phoneNumberType: 'mobile',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  stage2: DentistSignupStage2 = {
    dentistUserId: '5ec19e7d94cf001c80496f0e',
    licenceNumber: '',
  };

  stage2OfficeData: OfficeSchema = {
    name: '',
    address: '',
    city: 'New York',
    zip: '',
    openHours: 'Monday - Friday 09:00AM - 07:00PM',
    officePhoneNumber: '',
    officePhoneNumberType: 'mobile',
    email: '',
    officeEmail: '',
  };

  stage3: DentistSignupStage3 = {
    dentistUserId: '5ec19e7d94cf001c80496f0e',
    dentistOfficeId: '5ec1bfc6cb2c0338ec52bca3'
  };

  stage4: DentistSignupStage4 = {
    dentistUserId: '5ec19e7d94cf001c80496f0e',
    socialTags: '',
    website: '',
    instagram: '',
    facebook: '',
    linkedIn: '',
  };

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
    $('.add-me-btn').on('click', () => {
      $('#alreadyListed').show();
      $('#officeDentist').hide();
      $('#mobileDentist').hide();
    });
    $('.off-cancel-btn').on('click', () => {
      $('#sameOfficeExist').hide();
    });
    $('#officeName').keyup(() => {
      $('#sameOfficeExist').show();
    });
  }

  nextTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.next().addClass('active').siblings().removeClass('active');
  }

  prevTab(elem) {
    const $tabactive = $('.tab-content .tab-pane.active');
    $tabactive.prev().addClass('active').siblings().removeClass('active');
  }

  increaseStep(stage) {
    console.log(stage);
    const $active = $('.stepper--indicator ul li.active');
    $active.next().addClass('active').siblings().removeClass('active');
    this.nextTab($active);

    const $active1 = $('#headerNames .steps--names.activated');
    $active1.next().addClass('activated').siblings().removeClass('activated');
    this.signUpStep++;

  }

  decreseStep() {
    console.log('prev step function executed');
    const $active = $('.stepper--indicator ul li.active');
    $active.prev().addClass('active').siblings().removeClass('active');
    this.prevTab($active);
    const $active1 = $('#headerNames .steps--names.activated');
    $active1.prev().addClass('activated').siblings().removeClass('activated');
    this.signUpStep--;
  }

  signupProcess(stageLocal) {
    console.log(stageLocal);
    try {
      if (stageLocal === 1) {
        console.log('Its for step One');
        console.log(this.stage1);
        if (this.stage1.firstName === '') {
          throw new Error('first name is required');
        }
        if (this.stage1.lastName === '') {
          throw new Error('last name is required');
        }
        if (this.stage1.phoneNumber === '') {
          throw new Error('phone number is required');
        }
        if (this.stage1.type === '') {
          throw new Error('user type is required');
        }
        if (this.stage1.phoneNumberType === '') {
          throw new Error('phone number type is required');
        }
        if (this.stage1.email === '') {
          throw new Error('email is required');
        }
        if (this.stage1.confirmEmail === '') {
          throw new Error('repeat email is required');
        }
        if (this.stage1.email !== this.stage1.confirmEmail) {
          throw new Error('email and re-entered email do not match');
        }
        if (this.stage1.password === '') {
          throw new Error('password is required');
        }
        if (this.stage1.confirmPassword === '') {
          throw new Error('repeat password is required');
        }
        if (this.stage1.password !== this.stage1.confirmPassword) {
          throw new Error('password and re-entered password do not match');
        }
        const requestBody = {
          firstName: this.stage1.firstName,
          lastName: this.stage1.lastName,
          type: this.stage1.type,
          phoneNumber: this.stage1.phoneNumber,
          phoneNumberType: this.stage1.phoneNumberType,
          email: this.stage1.email,
          password: this.stage1.password
        };
        const url = 'user/dentist/signup';
        this.httpService.postRequestWithBody(url, requestBody).subscribe((response: any) => {
          console.log(response);
          if (response.status === 'Success') {
            this.openSnackBar('Dentist personal details registered');
            localStorage.setItem('dentistUserId', response.data.data._id)
            this.increaseStep(this.signUpStep);
          }
        },
          err => {
            this.openSnackBar('Something went wrong while Dentist personal details registration');
            console.log(err);
          });
      } else if (stageLocal === 2) {
        console.log('Its for step Two');
        console.log(this.stage2);
        console.log(this.stage2OfficeData);
        this.stage2OfficeData.email = this.stage2OfficeData.officeEmail;
        if (localStorage.getItem('dentistUserId') === null) {
          throw new Error('Dentist user id is required');
        } else {
          this.stage2.dentistUserId = localStorage.getItem('dentistUserId');
        }
        if (this.stage2.dentistUserId === '') {
          throw new Error('Dentist user id is required');
        }
        if (this.stage2.licenceNumber === '') {
          throw new Error('licence number is required');
        }
        if (this.stage2OfficeData.name === '') {
          throw new Error('name is required');
        }
        if (this.stage2OfficeData.address === '') {
          throw new Error('address is required');
        }
        if (this.stage2OfficeData.city === '') {
          throw new Error('city is required');
        }
        if (this.stage2OfficeData.zip === '') {
          throw new Error('zip is required');
        }
        if (this.stage2OfficeData.openHours === '') {
          throw new Error('zip is required');
        }
        if (this.stage2OfficeData.officePhoneNumber === '') {
          throw new Error('office phone number is required');
        }
        if (this.stage2OfficeData.officePhoneNumberType === '') {
          throw new Error('office phone number type is required');
        }
        if (this.stage2OfficeData.email === '') {
          throw new Error('email is required');
        }
        const requestBody = {
          dentistUserId: this.stage2.dentistUserId,
          licenceNumber: this.stage2.licenceNumber,
          data: []
        };
        requestBody.data.push(this.stage2OfficeData);
        const url = 'dentist/signup/office';
        this.httpService.postRequestWithBody(url, requestBody).subscribe((response: any) => {
          console.log(response);
          if (response.status === 'Success') {
            this.openSnackBar('Dentist office details registered');
            localStorage.setItem('officeId', response.data[0].data._id);
            this.increaseStep(this.signUpStep);
          }
        },
          err => {
            this.openSnackBar('Something went wrong while Dentist office registration');
            console.log(err);
          });
      } else if (stageLocal === 3) {
        console.log('Its for step Three');
      } else if (stageLocal === 4) {
        console.log('Its for step Four');
        console.log(this.stage4);
        if (localStorage.getItem('dentistUserId') === null) {
          throw new Error('Dentist user id is required');
        } else {
          this.stage4.dentistUserId = localStorage.getItem('dentistUserId');
        }
        if (this.stage4.dentistUserId === '') {
          throw new Error('Dentist user id is required');
        }
        const requestBody: any = {};
        if (this.stage4.dentistUserId !== '') {
          requestBody.dentistUserId = this.stage4.dentistUserId;
        }
        if (this.stage4.socialTags !== '') {
          requestBody.socialTags = this.stage4.socialTags;
        }
        if (this.stage4.website !== '') {
          requestBody.website = this.stage4.website;
        }
        if (this.stage4.instagram !== '') {
          requestBody.instagram = this.stage4.instagram;
        }
        if (this.stage4.facebook !== '') {
          requestBody.facebook = this.stage4.facebook;
        }
        if (this.stage4.linkedIn !== '') {
          requestBody.linkedIn = this.stage4.linkedIn;
        }
        const url = 'dentist/signup/social';
        this.httpService.postRequestWithBody(url, requestBody).subscribe((response: any) => {
          console.log(response);
          if (response.status === 'Success') {
            this.openSnackBar('Dentist office details registered');
            this.increaseStep(this.signUpStep);
          }
        },
          err => {
            this.openSnackBar('Something went wrong while Dentist office registration');
            console.log(err);
          });
      }
    } catch (error) {
      this.openSnackBar(error);
    }
  }

  onFileSelected(event) {
    console.log(event.target.files);
    this.images = event.target.files;
    // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < event.target.files.length; i++) {
    //   console.log(event.target.files[i]);
    //   this.images.push(event.target.files[i]);
    // }
  }

  uploadOfficeImages() {
    console.log('uploadOfficeImages');
    try {
      if (this.images === '') {
        throw new Error('select images to upload');
      }
      if (localStorage.getItem('dentistUserId') === null) {
        throw new Error('Dentist user id is required');
      } else {
        this.stage3.dentistUserId = localStorage.getItem('dentistUserId');
      }
      if (localStorage.getItem('officeId') === null) {
        throw new Error('Dentist user id is required');
      } else {
        this.stage3.dentistOfficeId = localStorage.getItem('officeId');
      }
      const requestBody = new FormData();
      requestBody.append('dentistUserId', this.stage3.dentistUserId);
      requestBody.append('dentistOfficeId', this.stage3.dentistOfficeId);
      for (const file of this.images) {
        requestBody.append('images', file); // file.name is optional
      }
      // requestBody.append('images', this.images.toString());
      const url = 'dentist/signup/photos';
      this.httpService.postRequestWithBody(url, requestBody).subscribe((response: any) => {
        console.log(response);
        if (response.status === 'Success') {
          this.openSnackBar('Dentist office details registered');
          // this.increaseStep(this.signUpStep);
          this.uploadSuccess = true;
        }
      },
        err => {
          this.openSnackBar('Something went wrong while Dentist office registration');
          console.log(err);
        });
    } catch (error) {
      this.openSnackBar(error);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
