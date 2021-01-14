import { ProjectService } from './../../service/project.service';
import { Project } from './../../models/project.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
id:number;
  showInput: false;

  projectReceived;
  project = {
    id:" ",
    projectname:" ",
    customername:" ",
    location:" "
  }
  constructor(private ProjectService:ProjectService,private route:ActivatedRoute, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

   }

  ngOnInit(): void {
    if (this.data) {
      this.projectReceived= this.data;
      this.project.id = this.data.project.id;
      this.project.customername = this.data.project.customername;
      this.project.location = this.data.project.location;
      this.project.projectname = this.data.project.projectname
      console.log(this.data);
    }


  }
  cancleSubject() {
    this.showInput = false;
  }
  save() {
    if (!this.data) {
      this.ProjectService.addProject(this.project)
    }
    else {
      this.ProjectService.editProject(this.project)
    }

  }

 

}
