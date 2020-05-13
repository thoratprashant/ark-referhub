import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  queryParameters = {
    "offset": 0,
    "limit": 10,
    "sortBy": {
      "creatorOn": -1
    },
    // "query": {
    //   "firstName": "dentist",
    //   "lastName": ""
    // }
  }
  usersArray = [];
  isFetchingData = true;

  constructor(private auth: AuthenticateService) { }

  ngOnInit(): void {
    this.auth.getUsersList(this.queryParameters).subscribe((data) => {
      console.log("UserListComponent -> ngOnInit -> data", data)
      this.isFetchingData = false;
      this.usersArray = data.usersList;
    }, (err) => {
      console.log("UserListComponent -> ngOnInit -> err", err);
      this.isFetchingData = false;
      if (err.status === 404) this.usersArray = [];
    });
  }

}
