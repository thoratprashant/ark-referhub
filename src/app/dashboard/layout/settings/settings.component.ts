import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  withdrawAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(){
    this.withdrawAlert = true;
  }
}
