import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-right-side',
  templateUrl: './calender-right-side.component.html',
  styleUrls: ['./calender-right-side.component.scss']
})
export class CalenderRightSideComponent implements OnInit {

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
