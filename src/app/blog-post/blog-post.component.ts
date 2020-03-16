import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {


  goBack(): void {
    this.location.back();
  }


  constructor(
    private location: Location
  ){}

  ngOnInit() {
    
  }

}
