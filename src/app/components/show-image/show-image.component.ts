import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnChanges {
  @Input()img!: string
  get _img(){
    return this.img
  }
  constructor() { }

  ngOnChanges(): void {
    
  }

}
