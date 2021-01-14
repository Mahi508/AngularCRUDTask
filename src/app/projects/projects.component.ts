import { EditComponent } from './edit/edit.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectService } from './../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects: any = [];
test;


  constructor(private ProjectService:ProjectService,public dialog:MatDialog,public router: Router ){ }
  // openDialog(project){
  //   if (project != null) {
  //   this.dialog.open(EditComponent, {data: {project: project}});
  //   }
  //   else {
  //     this.dialog.open(EditComponent);
  //   }
  // }
  openDialog(project): void {
        if (project != null) {
   const dialogRef = this.dialog.open(EditComponent, {data: {project: project}});
   dialogRef.afterClosed().subscribe(result => {
  
    console.log('The dialog was closed');
  });
    }
    else {
      const dialogRef =   this.dialog.open(EditComponent);
      dialogRef.afterClosed().subscribe(result => {
 
        console.log('The dialog was closed');
      });
    }
  }


  

  ngOnInit(): void {
   this.projects= this.ProjectService.onGet();
   console.log(this.projects);
   
  }
  editRow(project) {
    this.router.navigate(['project-add'], { queryParams:{project: project} })
  }
  removeProject(project) {
    this.ProjectService.removeproject(project.id)
  }
  

}
