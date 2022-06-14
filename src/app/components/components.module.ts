import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ShowImageComponent } from './show-image/show-image.component';



@NgModule({
  declarations: [
    PostComponent,
    UploadImageComponent,
    ShowImageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PostComponent,
    UploadImageComponent,
    ShowImageComponent,
  ]
})
export class ComponentsModule { }
