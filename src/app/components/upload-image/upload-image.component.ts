import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ImageSnippet } from 'src/app/models/upload-image.model';
import { ImageService } from 'src/app/services/image-service.service';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnChanges {
  @Output() img = new EventEmitter<ImageSnippet>() 
  @Input() posted: boolean = false
  selectedFile!: ImageSnippet;

  constructor(private imageService: ImageService) {}
  ngOnChanges(): void {
    console.log(this.posted)
    if (this.posted === true) {
      this.clearImage()
    }
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.img.emit(this.selectedFile)
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res)
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
  clearImage() {
    // @ts-ignore
    this.selectedFile = undefined
  }
}
