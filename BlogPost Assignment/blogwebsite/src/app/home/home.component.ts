import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogdataService } from '../services/blogdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any
  constructor(private blogData: BlogdataService) {
    blogData.getArticles().subscribe((data) => this.articles = data)
    console.warn(this.articles)
  }

  ngOnInit(): void {
  }

  deleteArticle(_id: any) {
    this.blogData.delArticle(_id).subscribe(data => {
      console.log(data)
      this.articles = this.articles.filter((q: any) => q._id != _id)

    });
  }

}
