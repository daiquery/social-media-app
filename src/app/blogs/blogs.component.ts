import { Component, OnInit } from '@angular/core';
import { Blogs } from '../mock-blogs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  goBack(): void {
    this.location.back();
  }


  blogs = Blogs;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

}
