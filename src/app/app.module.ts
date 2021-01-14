import { EditComponent } from './projects/edit/edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditModule } from './projects/edit/edit.module';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
  entryComponents:[EditComponent]
})
export class AppModule { }
