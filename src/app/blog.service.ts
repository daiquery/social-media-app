import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Blogs } from './mock-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlogs(): Blog[] {
    return Blogs;
  }

  constructor() { }
}
