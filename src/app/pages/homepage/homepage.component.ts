import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/homepage.model';
import { ImageSnippet } from 'src/app/models/upload-image.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  postCollection: Array<IPost> = []
  imageToPost!: string | null
  textPost!: string | null
  posted: boolean = false
  @Input() title: string = 'Home'
  constructor() { }

  ngOnInit(): void {
  }
  getImg(event: ImageSnippet) {
    this.imageToPost = event.src
  }
  addPost() {
    const post: IPost = {
      user: 'Juan Carlos Carrasquilla',
      date: new Date().toString(),
      image: this.imageToPost || null,
      text: this.textPost || null
    }
    if (post.image === null && post.text === null) return
    this.posted = true
    this.postCollection.unshift(post)
    this.textPost = null
    this.imageToPost = null
    setTimeout(() => { 
      this.posted = false
    }, 1000)
  }
}
