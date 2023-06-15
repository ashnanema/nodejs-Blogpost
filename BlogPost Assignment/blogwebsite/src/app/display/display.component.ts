import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogdataService } from '../services/blogdata.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  id: any
  article: any
  constructor(private route: ActivatedRoute, private blogData: BlogdataService, private router: Router) {
    blogData.displayArticle(this.route.snapshot.paramMap.get('_id')).subscribe((data) => this.article = data)
  }

  ngOnInit(): void {
  }

  deleteArticle(_id: any) {
    this.blogData.delArticle(_id).subscribe(data => {
      console.log(data)
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }
        , 1000);

    });
  }


}
