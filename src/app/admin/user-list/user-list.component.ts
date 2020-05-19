import { Component, OnInit } from '@angular/core';
import { AdminActionsService, UpdateStatusPayload } from '../admin-actions.service';
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
    limit: 5,
    sortBy: {
      createdAt: -1
    },
    query: {}
  }
  usersArray = [];
  totalUsers = 0;
  isFetchingData = true;
  search = {
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    phoneNumber: '',
    status: ''
  }
  page = 1;
  userStatus = ['Pending', 'Approved', 'Unapproved'];
  userTypes = ['Dentist', 'Specialist', 'Staff', 'Advertiser'];

  constructor(private action: AdminActionsService, private router: Router) { 
    this.searchUser = _.debounce(this.searchUser, 1000)
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.action.getUsersList(this.queryParameters).subscribe((data) => {
      this.isFetchingData = false;
      this.totalUsers = data.count ? data.count : 0;
      this.usersArray = data.usersList ? data.usersList : [];
    }, (err) => {
      this.isFetchingData = false;
      if (err.status === 404) {
        this.totalUsers = 0;
        this.usersArray = [];
      }
    });
  }

  updatedStatus(_id: string, status: string) {
    const params: UpdateStatusPayload = {
      _id: _id,
      status: status
    }
    this.action.updateUserStatus(params).subscribe((data) => {
      this.usersArray.map((user) => {
        if (user._id === data._id) user.status = data.status;
      });
    }, (err) => {
      console.log("UserListComponent -> updatedStatus -> err", err)
    });
  }

  searchUser(value) {
    this.queryParameters.query = this.search;
    this.queryParameters.offset = 0;
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
    this.queryParameters.offset = 0;
    this.queryParameters.query = this.search;
    this.getUsers();
  }

  openUserProfile(userId: string) {
    this.router.navigate([`/admin/userProfile/${userId}`]);
  }

  pageChanged(pageNumber) {
    this.queryParameters.offset = this.queryParameters.limit * pageNumber - this.queryParameters.limit;
    this.isFetchingData = true;
    this.getUsers();
  }

}
