import { Component, OnInit } from '@angular/core';
import { AuthenticateService, UpdateStatusPayload } from '../authenticate.service';
import { Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  queryParameters = {
    offset: 0,
    limit: 10,
    sortBy: {
      createdAt: -1
    },
    query: {}
  }
  usersArray = [];
  isFetchingData = true;
  search = {
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    phoneNumber: '',
    status: ''
  }
  userStatus = ['Pending', 'Approved', 'Unapproved'];
  userTypes = ['Dentist', 'Specialist', 'Staff', 'Advertiser'];

  constructor(private auth: AuthenticateService, private router: Router) { 
    this.searchUser = _.debounce(this.searchUser, 1000)
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.auth.getUsersList(this.queryParameters).subscribe((data) => {
      this.isFetchingData = false;
      this.usersArray = data.usersList ? data.usersList : [];
    }, (err) => {
      this.isFetchingData = false;
      if (err.status === 404) this.usersArray = [];
    });
  }

  updatedStatus(_id: string, status: string) {
    const params: UpdateStatusPayload = {
      _id: _id,
      status: status
    }
    this.auth.updateUserStatus(params).subscribe((data) => {
      this.usersArray.map((user) => {
        if (user._id === data._id) user.status = data.status;
      });
    }, (err) => {
      console.log("UserListComponent -> updatedStatus -> err", err)
    });
  }

  searchUser(value) {
    if (this.search.status === 'Status') this.search.status = ""
    this.queryParameters.query = this.search;
    this.isFetchingData = true;
    this.getUsers();
  }

  clearFilters() {
    this.search = {
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      phoneNumber: '',
      status: ''
    }
    this.queryParameters.query = this.search;
    this.getUsers();
  }

  openUserProfile(userId: string) {
    this.router.navigate([`/admin/userProfile/${userId}`]);
  }

}
