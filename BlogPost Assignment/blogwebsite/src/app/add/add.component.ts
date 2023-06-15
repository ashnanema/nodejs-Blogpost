import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BlogdataService } from '../services/blogdata.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private blogData: BlogdataService, private router: Router) { }

  ngOnInit(): void {
  }

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  saveNewArticle() {
    console.warn(this.addForm.value)
    this.blogData.saveArticle(this.addForm.value).subscribe((result) => {
      console.warn(result)
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }
        , 2000);

    })
  }

  get title() {
    return this.addForm.get('title')
  }

  get category() {
    return this.addForm.get('category')
  }

  get description() {
    return this.addForm.get('description')
  }




}
