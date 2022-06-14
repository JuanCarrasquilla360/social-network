import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ShowFriendProfileComponent } from './show-friend-profile/show-friend-profile.component';



@NgModule({
  declarations: [
    PostComponent,
    ShowImageComponent,
    ShowFriendProfileComponent,
    UploadImageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PostComponent,
    ShowImageComponent,
    ShowFriendProfileComponent,
    UploadImageComponent,
  ]
})
export class ComponentsModule { }
