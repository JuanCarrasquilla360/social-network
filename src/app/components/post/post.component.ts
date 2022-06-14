import { Component, Input, OnInit } from '@angular/core';


interface IComment {
  user: string;
  date: string
  text: string
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() username: string = 'Juan Carlos Carrasquilla'
  @Input() imageProfile!: string
  @Input() imagePost!: string
  @Input() textPost: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sem et neque luctus scelerisque viverra vel diam. Vestibulum lectus urna, commodo vel viverra id, ultricies ac odio. Donec ultrices pharetra laoreet. '
  liked: boolean = false
  commentCollection: Array<IComment> = []
  comment!: string
  constructor() { }

  ngOnInit(): void {

  }

  addComment(comment: string) {
    const commentData: IComment = {
      date: Date(),
      text: comment,
      user: this.username
    }
    this.commentCollection.push(commentData)
    console.log(this.commentCollection)
    this.comment = ''
  }

  deleteComment(index: number) {
    this.commentCollection.splice(index, 1)
  }
}
