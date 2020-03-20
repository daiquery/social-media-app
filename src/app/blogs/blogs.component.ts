import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { Blogs } from '../mock-blogs'
import { Location } from '@angular/common';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  goBack(): void {
    this.location.back();
  }
  // getBlogs(): void {
  //   this.blogs = this.blogService.getBlogs();
  // }

  delete(id): void{
    var i;
    for (i = 0; i < this.blogs.length; i++){
      if(this.blogs[i].id === id){
        this.blogs.splice(i,i+1)
      }
      
    }
  
  }


  blogs = Blogs;

  constructor(
    private location: Location,
    // private blogService: BlogService,
  ) { }

  ngOnInit() {
    // this.getBlogs();
  }

}
