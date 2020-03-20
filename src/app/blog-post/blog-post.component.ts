import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Blogs } from '../mock-blogs'
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  
  bblog = new Blog();
  
  id: number;
  content: string;
  creator: string;
  blogs = Blogs;


  goBack(): void {
    this.location.back();
  }

  newBlog(): void {
   console.log(`${this.creator}`)
   this.bblog.creator = this.creator;
   this.bblog.content = this.content;
   this.bblog.id = this.id;
   this.blogs.push(this.bblog);

  }

  test(): void {
    console.log(`this is the creator, ${this.creator}, this is the content ${this.content}, this is the ID ${this.id}`);
  }


  constructor(
    private location: Location,
  ){}

  ngOnInit() {
    
  }

}
