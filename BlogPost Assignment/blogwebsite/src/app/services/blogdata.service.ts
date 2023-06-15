import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {
  url = "http://localhost:1111/blogs"

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.url)
  }

  saveArticle(data: any) {
    return this.http.post(this.url, data)
  }

  displayArticle(_id: any) {
    return this.http.get(`${this.url}/${_id}`)
  }

  editArticle(_id: any, data: any) {
    return this.http.patch(`${this.url}/${_id}`, data)
  }

  delArticle(_id: any) {
    return this.http.delete(`${this.url}/${_id}`)
  }
}
