import { EditComponent } from './projects/edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: " ",
    component: ProjectsComponent
  },
  {
    path: "project-add",
    component: EditComponent
  },
  {
    path: "project/edit/:id ",
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
