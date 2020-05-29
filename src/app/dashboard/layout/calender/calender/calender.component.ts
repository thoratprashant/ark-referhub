import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  categoryList = true;
  editCategory = false;
  constructor() { }

  ngOnInit(): void {
  }

  editCategoryclick(){
    this.categoryList = false;
    this.editCategory = true;
  }
  backToCatList(){
    this.categoryList = true;
    this.editCategory = false;
  }
}
