import { Component, OnInit } from '@angular/core';
import { friends } from '../friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

 friends = friends;

  constructor() { }

  ngOnInit() {
  }

}
