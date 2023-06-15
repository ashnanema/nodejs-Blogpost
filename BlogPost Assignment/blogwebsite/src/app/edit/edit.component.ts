import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BlogdataService } from '../services/blogdata.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any
  aId: any
  constructor(private blogData: BlogdataService, private router: ActivatedRoute, private route: Router) { }

  editForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('')
  })


  ngOnInit(): void {

    this.blogData.displayArticle(this.router.snapshot.paramMap.get('_id')).subscribe((data: any) => {
      this.editForm = new FormGroup({
        title: new FormControl(data['title']),
        category: new FormControl(data['category']),
        description: new FormControl(data['description'])
      })
    })
  }

  updateArticle() {
    this.aId = this.router.snapshot.paramMap.get('_id')
    this.blogData.editArticle(this.router.snapshot.paramMap.get('_id'), this.editForm.value).subscribe((result) => {
      console.warn(result)
      setTimeout(() => {
        this.route.navigateByUrl(`display/${this.aId}`)
      }
        , 2000);

    })
  }
}






