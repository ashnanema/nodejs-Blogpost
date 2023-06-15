import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: AddComponent,
    path: "add"
  },
  {
    component: EditComponent,
    path: "edit/:_id"
  },
  {
    component: DisplayComponent,
    path: "display/:_id"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
