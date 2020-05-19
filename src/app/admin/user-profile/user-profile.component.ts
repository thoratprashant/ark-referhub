import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService, UpdateStatusPayload } from '../admin-actions.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userId: string = '';
  userInfo = {
    _id: '',
    type: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dentistOfficeInfo: [],
    dentistOfficeImagesInfo: [],
    dentistSocialInfo: {
      instagram: '',
      facebook: '',
      linkedin: '',
      website: '',
      socialTags: ''
    }
  };
  isLoading: Boolean = true;
  editPersonalInformation: Boolean = false;
  editOfficeInformation: Boolean = false;
  personalInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };
  officeInfo = [];

  constructor(private route: ActivatedRoute, private action: AdminActionsService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.isLoading = true; 
    this.getUserInformation();
  }

  getUserInformation() {
    this.action.getUserInformation({ id: this.userId }).subscribe((data) => {
      this.userInfo = {...data};
      this.isLoading = false;
      console.log("UserProfileComponent -> ngOnInit -> this.userInfo", this.userInfo)
    }, (err) => {
      this.isLoading = false;
    });
  }

  editProfile() {
    this.editPersonalInformation = true;
    this.personalInfo = {...this.userInfo};
  }

  editOfficeAddress() {
    this.editOfficeInformation = true;
    this.officeInfo = {...this.userInfo.dentistOfficeInfo};
    console.log("editOfficeAddress -> this.officeInfo", this.officeInfo)
  }

  updatePersonalInformation() {
    let params = {
      _id: this.userInfo._id,
      type: this.userInfo.type,
      personalInformation: {
        firstName: this.personalInfo.firstName,
        lastName: this.personalInfo.lastName,
        email: this.personalInfo.email,
        phoneNumber: this.personalInfo.phoneNumber,
      }
    }
    this.action.updateUserInformation(params).subscribe((data) => {
      this.getUserInformation();
      this.editPersonalInformation = false;
    }, (err) => {
      console.log("updatePersonalInformation -> err", err)
    });
  }

}
