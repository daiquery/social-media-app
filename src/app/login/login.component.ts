import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  home(){
    // go to user homepage
    this.router.navigate(['/home'])
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
