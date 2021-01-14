import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = [
    {
      id:1,
      projectname:"zomato",
      customername:"abhi",
      location:"hyderabad"

    },
    {
      id:2,
      projectname:"swiggy",
      customername:"mahi",
      location:"bangalore"

    },
    {
      id:3,
      projectname:"panda",
      customername:"pandu",
      location:"chennai"

    },
  ];

  constructor() { }


  addProject(projects){
    console.log(projects)
    projects["id"] = this.projects.length + 1
    this.projects.push(projects);
 }

  editProject(projects){
    const index = this.projects.findIndex(c => c.id === projects.id);
    this.projects[index] = projects;
  }
  
 removeproject(id:number) {
   const projects = this.projects.findIndex(a =>a.id === id);
  this.projects.splice(projects,1);
   
 }
 
 getAllprojects(){
   return this.projects;
 }

  onGet(){
    return this.projects;
  }
}
